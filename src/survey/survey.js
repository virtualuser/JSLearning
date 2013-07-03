// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function getResults() {
    'use strict';

    var i,
        j,
        output = 'Name: ' + document.getElementById('name').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n',
        radios = [document.getElementsByName('sq1Radio'), document.getElementsByName('sq2Radio')];

    for (i = 0; i < radios.length; i++) {
        for (j = 0; j < radios[i].length; j++)
        {
            if (radios[i][j].checked) {
                output += 'Question ' + (i + 1) + ': ' +
                    document.getElementById('sq' + (i + 1) + 'RadioLabel' + (j + 1)).innerHTML + '\n';
                break;
            }
        }
    }

    if (output !== '') {
        alert(output);
    }

    return false;
}

shim.addEventListener(window, 'load',
    function () {
        'use strict';

        shim.addEventListener(document.getElementById('formSurvey'), 'submit', getResults);
    }
);