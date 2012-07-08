// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function setup(msgAry) {
    'use strict';

    var randomKey = -1
    , collisionCount
    , text = ''
    , aryLen = msgAry.length
    , currentRandomKey;
    
    function updateRandomKey(first) {
        
        var currentRandomKey;
        
        if (first) {
            currentRandomKey = randomKey;
            collisionCount = 0;
        }
        
        if ((randomKey = Math.floor(Math.random() * aryLen))
                === currentRandomKey) {
                collisionCount += 1;
                updateRandomKey(false);                
        }
    };
    
    function pad(number, chr) {
        var text = aryLen.toString().replace(/./g, chr);
        if (number === 0) {
                number = 1;
        }
        
        while (number >= 1) {
            number /= 10;
            text = text.substr(1, pad.length - 1) ;
        }
        return text;
    }

    function print() {
        'use strict';
        
        var i;

        updateRandomKey(true);

        for (i = 0; i < collisionCount; i += 1) {
            text += "Collision!<br />";
        }
        
        i = randomKey === 0 ? 1 : randomKey;
        
        text += "Key: " + pad(randomKey, '0') + randomKey + " Value: " + msgAry[randomKey] + "<br />";
 
        $('#output').html(text);        
    };
    
    return print;
};

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    $('#getKey').on('click', setup(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']));
});