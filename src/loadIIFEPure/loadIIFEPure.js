// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com
// Improved by ImBcmDth (nick) on irc.freenode.net - ##javascript
// Jon-Carlos Rivera - see THANKS file

(function (global) {

    'use strict';

    var ORG_X = 10
    , x = ORG_X
    , incButton = document.getElementById('incButton')
    , rstButton = document.getElementById('rstButton')
    , output = document.getElementById('output');

    global.appSpace = {
        z : 'z'
        , appSum: function (y) {
            return x + y;
        }
        , appMult: function (y) {
            return x * y;
        }
        , getX: function () {
            return x;
        }
        , setX: function (y) {
            x = y;
        }
        , getIncButton: function () {
            return incButton;
        }
        , getRstButton: function () {
            return rstButton;
        }
        , getOutput: function () {
            return output;
        }
        , reset: function () {
            x = ORG_X;
            output.innerHTML = x;
        }
    };
    
    incButton.addEventListener("click", function () {
        output.innerHTML = ++x;
    });
    
    rstButton.addEventListener("click", global.appSpace.reset);

}(window));

appSpace.getOutput().innerHTML = appSpace.getX() + " * 5 = " + appSpace.appMult(5) + '<br />';
appSpace.getOutput().innerHTML += appSpace.getX() + " + 5 = " + appSpace.appSum(5) + '<br />';
appSpace.getOutput().innerHTML += "appSpace.z = " + "\'" + appSpace.z + '\'';
appSpace.setX(20);