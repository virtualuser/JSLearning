function setup() {
    'use strict';

    var msgAry = ['a', 'b', 'c']
    , randomAry = [-1]
    , i;

    return function () {
        randomAry = getRandomInt(0, msgAry.length - 1, randomAry[randomAry.length - 1]);
        for (i = 0; i < randomAry.length - 1; i++) {
            $('#output').html($('#output').html() + "Collision!<br />");
        };
        $('#output').html($('#output').html() + "Key: "
            + randomAry[i] + " Value: " + msgAry[randomAry[i]] + "<br />");
    };
}

function getRandomInt(min, max, prevRandomKey) {
    'use strict';

    var resultAry = []
    , random;

    random = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (random === prevRandomKey) {
        resultAry = getRandomInt(min, max, prevRandomKey);
    }

    resultAry.push(random);
    
    return resultAry;
}

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    $('#getKey').on('click', setup());
});