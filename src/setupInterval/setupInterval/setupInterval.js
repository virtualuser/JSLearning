// Original Author:  ljharb - irc.freenode.net - ##javascript
// see THANKS File.  Updated rewrite of original code by Scott Sanbar
// updated/fixed by Scott Sanbar

var setup = function (numFlashes) {
    'use strict';
    
    var show = true
    , foo = function () {
        if (show) {
            $('#one, #two, #three').show();
        } else {
            $('#one, #two, #three').hide();
            --numFlashes;
        }
        if (numFlashes > 0) {
            show = !show;
            window.setTimeout(foo, 1e3);
        }
    };
    foo();
};

$(document).ready(setup(6));