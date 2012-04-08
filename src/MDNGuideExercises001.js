// Portions copyright 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author (portions):  Scott Sanbar - scott.sanbar@gmail.com
//
// MDNGuideExercises001.js - Miscellaneous exercises as I work through the
// Mozilla Developer Network Guide - some exercises are from the MDN Guide.

function printAndEvalExpression(expression, printEval, id) {

    if (printEval) {
        document.getElementById(id).innerHTML += expression + " = " + eval(expression)
            + " | evaluated |<br />";
    } else {
        document.getElementById(id).innerHTML += expression + "<br />";
        eval(expression);
    }
}

function runExercises(id) {
    document.getElementById(id).innerHTML = "";
    printAndEvalExpression("1 + 1", true, id);
    printAndEvalExpression("answer = 42", false, id);
    printAndEvalExpression("answer", true, id);
    printAndEvalExpression("answer = 'Hello, answer!'", false, id);
    printAndEvalExpression("answer", true, id);
}