function Images (containingElem, srcs) {
    'use strict';

    this.images = [];
    this.count = srcs.length;

    this.status = 'loading';
    this.statusCallback = null;
    this.containingElem = containingElem;

    srcs.forEach(function (c, i) {
        this.images.push(new Image());
        this.images[i].onload = this.onLoad.bind(this);
        this.images[i].onerror = this.onError.bind(this);
        this.images[i].src = c;
    }, this);
}

Images.prototype.onError = function () {
    console.log('in onErr');
    this.status = 'error';
    if (this.statusCallback) {
        this.statusCallback();
    }
};

Images.prototype.onLoad = function () {

    console.log(this.count);

    if (--this.count === 0) {
        this.status = 'success';
    }
    if (this.statusCallback) {
        this.statusCallback();
    }
};

Images.prototype.displayImagesNow = function () {
    this.images.forEach(function (c) {
        this.containingElem.appendChild(c);
    }, this)
};

Images.prototype.displayImages = function () {

    if (this.status === 'error') {
        console.log('displayImages: there was an error - cannot display images.');
        return;
    }
    this.statusCallback = this.displayImagesNow.bind(this);
    if (this.status === 'success') {
        this.displayImagesNow();
    }
};

window.addEventListener('load', function () {
    var containingElem = document.getElementById('output'),
        buttonElem = document.getElementById('button'),
        images = new Images(containingElem, ['http://www.quirkscode.com/images/335px-Tux_svg.png', 'http://www.quirkscode.com/images/html5-logo.png']);

    buttonElem.addEventListener('click', images.displayImages.bind(images), false);
}, false);
