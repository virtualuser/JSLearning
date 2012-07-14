// Copyright 2012 © Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

window.addEventListener('load', function () {
    "use strict";

    var fileElem = document.getElementById('fileElem'),
        fileSelect = document.getElementById('fileSelect'),
        message = document.getElementById('message'),

        mySpace = {
            numImgs: 0,
            numLoadedImgs: 0,
            imgs: [],

            imgAppend: function () {
                var i;
                message.innerHTML = '';
                message.hidden = true;
                this.imgs.forEach(function (img) {
                    message.appendChild(img);
                });
                message.hidden = false;
            },

            imgLoad: function (img) {
                this.numLoadedImgs += 1;
                if (this.numLoadedImgs === this.numImgs) {
                    this.imgAppend();
                }
            },

            readerLoad: function (img) {
                return function (e) {
                    img.src = e.target.result;
                };
            },

            handleFiles: function (files) {
                var file,
                    reader,
                    imageType = /image.*/,
                    i;

                this.imgs.forEach(function (img) {
                    message.removeChild(img);
                });

                this.imgs = [];
                this.numLoadedImgs = 0;
                this.numImgs = files.length;

                files = [].slice.call(files);

                files.forEach(function (file) {

                    var img;

                    if (!file.type.match(imageType)) {
                        this.numImgs -= 1;
                        return;
                    }

                    img = new Image();
                    this.imgs.push(img);
                    img.className = "thumb";
                    img.file = file;
                    img.addEventListener('load', this.imgLoad(img));

                    reader = new FileReader();
                    reader.addEventListener('load', this.readerLoad(img));
                    reader.readAsDataURL(file);

                }.bind(this));

                if (this.numImgs === 0) {
                    message.innerHTML = '(No Images Selected)';
                }
            }
        };

    fileElem.addEventListener("change", function (e) {
        mySpace.handleFiles(this.files);
    }, false);

    fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"  
    }, false);
});