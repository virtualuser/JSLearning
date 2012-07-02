// Original Author:  ImBcmDth - irc.freenode.net - Jon-Carlos Rivera
// Updated by Scott Sanbar to use a var instead of set a property.
// per suggestion of ljharb on irc.freenode.net ##javascript channel
// see THANKS File

    var globalFunction = (function () { // global is == to window
        "use strict"; // Tells JS engine to warn you about silly things you've done

        var myVariable = 10;

        function internalFunction(val) {
            return myVariable * val;
        }

        return function (num) {
            return internalFunction(num);
        };

    }());
// We pass "window" like that above, because we may want to pass other objects
// in future. One possibility is "module" if this library will be used for 
// a node.js library or similar.

// Now, in another file later we can do:

// var num = externalFunction(2); // t = 20