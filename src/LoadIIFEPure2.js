// Copyright 2011-2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com
// Improved by Jon-Carlos Rivera - see THANKS file

(function (global) {
  
    'use strict';
  
    var x = 10,
    button = document.getElementById('idButton'),
    output = document.getElementById('idOutput');
 
    button.addEventListener("click", function () {
        output.innerHTML = x++;
    });
       
    global.appSpace = {
        z : 0,

        appSum: function (y) {
            return x + y;
        },

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
      
})(window);

appSpace.getOutput().innerHTML = appSpace.appMult(5) + '<br />';
appSpace.getOutput().innerHTML += appSpace.appSum(5);