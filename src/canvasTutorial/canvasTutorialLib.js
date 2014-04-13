// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  http://billmill.org/static/canvastutorial/  Updated by Scott Sanbar

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var ddx = 1;
var ddy = 1;
var MAXDX = 50;
var MAXDY = 50;
var WIDTH;
var HEIGHT;
var ctx;

function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    return setInterval(draw, 10);
}

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}