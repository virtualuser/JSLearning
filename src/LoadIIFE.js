// Copyright 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

var appSpace = (function (global) {
  
    'use strict';
  
    var x = 10,
    button = document.getElementById('idButton'),
    output = document.getElementById('idOutput');
    
    global.appSum = function (y) {
        return x + y;
    };
    
    button.addEventListener("click", function () {
        output.innerHTML = x++;
    });
    
    return {
        z : 0,
        
        appMult: function (y) {
            return x * y;
        },
        
        setX: function (y) {
            x = y;
        },
        
        getOutput: function () {
            return output;
        }
    };
      
}(window));

appSpace.getOutput().innerHTML = appSpace.appMult(5) + '<br />';
appSpace.getOutput().innerHTML += appSum(5);