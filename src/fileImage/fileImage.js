window.addEventListener('load', function () {
    'use strict';

    var fileElem = document.getElementById('file'),
        outputElem = document.getElementById('output');

    fileElem.addEventListener('change', function () {
        var i,
            imageType = /imag.*/,
            img,
            file,
            reader,
            files = fileElem.files;

        while (outputElem.firstChild) {
            outputElem.removeChild(outputElem.firstChild);
        }

        for (i = 0; i < files.length; i++) {
            file = files[i];
            imageType = /image.*/;

            if (!file.type.match(imageType)) {
                continue;
            }

            img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
            outputElem.appendChild(img);

            reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }
    }, false);
}, false);