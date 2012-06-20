// Copyright 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function load() {
    mySpace = {
        fileSelect: document.getElementById("fileSelect"),
        fileElem: document.getElementById("fileElem"),
        fileNames: document.getElementById("fileNames"),
        
        handleFiles: function(files) {
            files.length > 0 ? this.fileNames.innerHTML = ''
                : this.fileNames.innerHTML = '(No Files Selected)';
            for (var i = 0; i < files.length; i++) {
                this.fileNames.innerHTML += files[i].name + '<br />';
            }
        }
    };
    fileSelect.addEventListener("click", function (e) {  
        if (mySpace.fileElem) {  
            mySpace.fileElem.click();  
        }  
        e.preventDefault(); // prevent navigation to "#"  
    }, false);
}