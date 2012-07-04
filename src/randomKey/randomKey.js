function setup() {
    'use strict';

    var msgAry = ['a', 'b', 'c']
    , randomAry = getRandomInt(0, msgAry.length - 1)
    , output = document.getElementById('output')
    , i;

    return function () {
        randomAry = getRandomInt(0, msgAry.length - 1, randomAry[randomAry.length - 1]);
        for (i = 0; i < randomAry.length - 1; i++) {
            output.innerHTML += "Collision!<br />";
        }
        output.innerHTML += "Key: " + randomAry[i] + " Value: "
        + msgAry[randomAry[i]] + "<br />";
    };
}

function getRandomInt(min, max, prevRandomKey) {
    'use strict';

    var resultAry = []
    , random;

    do {
        if (typeof random !== "undefined") {
            resultAry.push(random);
        }
        random = Math.floor(Math.random() * (max - min + 1) + min);
    } while (random === prevRandomKey);

    resultAry.push(random);
    
    return resultAry;
}

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    $('#getKey').on('click', setup());
});