// Copyright © 2012 by Scott Sanbar - see COPYRIGHT file
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

var canvas, context, img;

function isCanvasSupported()
{
    'use strict';
    
    // Returen true if the canvas element is supported, false otherwise
    
    var elem = document.createElement('canvas'); 
    return !!(elem.getContext && elem.getContext('2d'));
}

function drawImage () {
    'use strict';
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

function load () {
    'use strict';
    
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    img = new Image();
    img.addEventListener('load', drawImage, false);
    img.src = '../../res/images/sanbar_computing_logo.png';
    window.addEventListener('resize', drawImage, false)
}

if (isCanvasSupported()) {
    window.addEventListener('load', load, false)
};