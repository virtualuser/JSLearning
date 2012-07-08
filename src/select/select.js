// Copyright © 2012 by Scott Sanbar - see COPYRIGHT file
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function change(value) {
    console.log(value);
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('select').
        addEventListener('change', function () {return change(this.value)})
});