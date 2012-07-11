// Original author:  Jon-Carlos Rivera - ImBcmDth on ##javascript channel on
// irc.freenode.net - see THANKS - cleaned up using jslint by Scott Sanbar

function RandomMessageGenerator(messageArray, noCollisionWithin) {
    'use strict';

    var range = messageArray.length - 1
    , histogramLength, histogram = []
    
    , getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.onrandom = function(randomNumber, randomMessage, randomCollisions) {
        console.log(randomNumber, randomMessage, randomCollisions);
    };
    
    if (typeof noCollisionWithin === "undefined") {
        histogramLength = 1;
    } else {
        histogramLength = Math.floor(range
            * (Math.min(noCollisionWithin || 0, 1)));
    }

    this.getRandomMessage = function () {
        var message
        , collisionCount = 0
        , random = getRandomInt(0, range);
        
        while (histogram.indexOf(random) !== -1) {
            collisionCount += 1;
            random = getRandomInt(0, range);
        }
        
        histogram.unshift(random);
        histogram.length = histogramLength;
        
        message = messageArray[random];

        this.onrandom(random, message, collisionCount);
        
        return message;
    };
}

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    var simpleMessages = 
        new RandomMessageGenerator(['a', 'b', 'c', 'd', 'e', 'f'], 1);

    simpleMessages.onrandom = function(randomNum, randomMessage, collisions) {
        var $output = $("#output")
        , originalHTML = $("#output").html()
        , i;

        for (i = 0; i < collisions; i += 1) {
            originalHTML += "Collision!<br />";
        }
        
        originalHTML += "Key: " + randomNum + " Value: "
            + randomMessage + "<br />";
        
        $output.html(originalHTML);
    };

    $('#getKey').on('click', function () {
        simpleMessages.getRandomMessage();
    });
});