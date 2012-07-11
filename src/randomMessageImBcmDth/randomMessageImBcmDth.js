// Original author:  Jon-Carlos Rivera - ImBcmDth on ##javascript channel on
// irc.freenode.net - see THANKS - cleaned up using jslint by Scott Sanbar

function RandomMessageGenerator(messageArray) {
    "use strict";

    var lastRandom, range = messageArray.length - 1
    
    , getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.onrandom = function (randomNumber, randomMessage, randomCollisions) {
        console.log(randomNumber, randomMessage, randomCollisions);
    };

    this.getRandomMessage = function () {
        var message, random, collisionCount = 0;

        random = getRandomInt(0, range);
        while (random === lastRandom) {
            collisionCount += 1;
            random = getRandomInt(0, range);
        }

        message = messageArray[random];
        lastRandom = random;

        this.onrandom(random, message, collisionCount);
        return message;
    };
}

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    var simpleMessages = new RandomMessageGenerator(['a', 'b', 'c']);

    simpleMessages.onrandom = function (randomNum, randomMessage, collisions) {
        var $output = $("#output")
        , originalHTML = $("#output").html()
        , i;
        
        for (i = 0; i < collisions; i += 1) {
            originalHTML += "Collision!<br />";
        }
        originalHTML += "Key: " + randomNum + " Value: " + randomMessage + "<br />";
        $output.html(originalHTML);
    };
    
    $('#getKey').on('click', function () {
        simpleMessages.getRandomMessage();
    });
});