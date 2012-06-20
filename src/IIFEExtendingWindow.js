// No known Copyright
// Original Author:  ImBcmDth - irc.freenode.net - Jon-Carlos Rivera
// see THANKS File



(function(global) { // global is == to window
  "use strict"; // Tells JS engine to warn you about silly things you've done

  var myVariable = 10;

  function internalFunction(val) {
    return myVarible * val;
  }

  global.externalFunction = function(num){
    return internalFunction(num);
  };

})(window);
// We pass "window" like that above, because we may want to pass other objects
// in future. One possibility is "module" if this library will be used for 
// a node.js library or similar.

// Now, in another file later we can do:

var t = externalFunction(2); // t = 20