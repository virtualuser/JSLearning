// Original Author: laszlof (nick) on irc.freenode.net - ##javascript channel
// slightly altered by Scott Sanbar

(function (global) {
    
    'use strict';
    
    // create a single global object
    global.myapp = {
        // "config" sub-object
        config: {
            myObject: {}
        },
        
        // initialization function
        init: function() {
            this.config.myObject = {
                Bar: 'Baz'
            };     
        },
    };
        
    // call initialization function
    myapp.init();
    
    // call specific config variables
    console.log(myapp.config.myObject.Bar);
    
// () will autorun the function
}(window));