// Portions copyright 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author (portions):  Scott Sanbar - scott.sanbar@gmail.com
//
// MDNGuideExercises001.js - Miscellaneous exercises as I work through the
// Mozilla Developer Network Guide - some exercises are from the MDN Guide.

function gJSL_displayInput(idInput, idOutput) {

    var loc = "::JSLearning::gJSL_displayInput()";
    try {
        var ifrm = document.getElementById(idOutput);
        var cnt = (ifrm.contentWindow || ifrm.contentDocument);
        var doc;
        doc = cnt.document;
        doc.open();
        doc.write(document.getElementById(idInput).value);
        doc.close();
    } catch (e) {
        exceptionAlert(loc, e);
    }
}