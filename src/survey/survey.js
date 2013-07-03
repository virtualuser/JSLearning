// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function getResults() {
    "use strict";

    var i,
        j,
        radios = [document.getElementsByName("sq1Radios"), document.getElementsByName("sq2Radios")];

    for (i = 0; i < radios.length; i++) {
        for (j = 0; j < radios[i].length; j++)
        {
            if (radios[i][j].checked) {
                alert("Name: " + document.getElementById('name').value + "\n" +
                    "Email: " + document.getElementById('email').value + '\n' +
                    " Question 1: " + document.getElementById('sq' + i + 'RadioLabel' + j).innerHTML);
                break;
            }
        }
    }
    return false;
}