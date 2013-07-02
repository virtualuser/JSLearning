/**
 * Created with JetBrains PhpStorm.
 * User: Scott
 * Date: 7/1/13
 * Time: 7:35 PM
 * To change this template use File | Settings | File Templates.
 */
function getResults() {
    "use strict";

    var i,
        radios = document.getElementsByName("survey");

    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("Name: " + document.getElementById('name').value + " Question 1: " + document.getElementsByName('radioLabels')[i].innerHTML);
            break;
        }
    }
    return false;
}