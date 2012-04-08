// Portions copyright 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author (portions):  Scott Sanbar - scott.sanbar@gmail.com
//
// MDNGuideExercises001.js - Miscellaneous exercises as I work through the
// Mozilla Developer Network Guide - some exercises are from the MDN Guide.

function gJSL_params(expression, id, printEval) {
    this.expression = expression;
    this.id = id;
    this.printEval = printEval;
}

function gJSL_printAndEvalExpressions(paramsArray) {
    
    for (var index in paramsArray) {

        if (paramsArray[index].printEval) {
            document.getElementById(paramsArray[index].id).innerHTML
                += paramsArray[index].expression + " = " + eval(paramsArray[index].expression)
                + " | evaluated |<br />";
        } else {
            document.getElementById(paramsArray[index].id).innerHTML
                += paramsArray[index].expression + " | expression |<br />";
            eval(paramsArray[index].expression);
        }
    }
}

function runExercises(id) {
    document.getElementById(id).innerHTML = "";
    
    var paramsArray = [
        new gJSL_params("1 + 1", id, true),
        new gJSL_params("var answer = 42;", id, false),
        new gJSL_params("answer", id, true),
        new gJSL_params("answer = 'Hello, answer!';", id, false),
        new gJSL_params("answer", id, true)
    ];
    
    gJSL_printAndEvalExpressions(paramsArray);
}