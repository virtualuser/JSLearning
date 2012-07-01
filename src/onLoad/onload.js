// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

console.log('Logged: at the top of onload.js');

function load() {
    'use strict';

    console.log('Logged: inside function load() DOMContentLoaded event handler');
}

window.addEventListener('DOMContentLoaded', load, false);

console.log('Logged: at the bottom of onload.js');