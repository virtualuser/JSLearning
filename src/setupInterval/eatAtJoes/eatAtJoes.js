// Original Author:  ljharb - irc.freenode.net - ##javascript
// Turned into cool Joe's Sign:  ImBcmDth - irc.freenode.net - Jon-Carlos Rivera
// also on ##javascript - see THANKS File
// Based on snippet by Scott Sanbar.  Updated by Scott Sanbar

var setup = function (numCycles) {
    'use strict';

    var cssAry = ["#one", "#two", "#three", "#four", "#five"]
    , panelIdx = 0
    , flashCycle = 0;
    
    (function foo() {
        if(!panelIdx) {
            if(!flashCycle) {
                $(cssAry.join(", ")).hide();
                flashCycle++;
                window.setTimeout(foo, 1e3);
            } else if(flashCycle === 1) {
                flashCycle++;
                $(cssAry.join(", ")).show();
                window.setTimeout(foo, 1.5e3);
            } else {
                $(cssAry.join(", ")).hide();
                flashCycle = 0;
                panelIdx++;
                if ((numCycles--) > 0) {
                    window.setTimeout(foo, 1e3);
                }
            }
        } else {
            $(cssAry[panelIdx - 1]).show();
            window.setTimeout(foo, 1e3);
            panelIdx = ++panelIdx % (cssAry.length + 1);
        }
    }());
};

$(document).ready(setup(3));
