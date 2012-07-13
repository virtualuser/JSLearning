/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function RandMsgGen(msgAry, callback) {
    if(callback) this.callback = callback;
    this.msgAry = msgAry;
};

RandMsgGen.prototype = {
    
    msgAry: []
    , randKey: 0
    , callback: function(){}
    
    , updateRandKeyAndCollCount: function () {
        var currRandKey = this.randKey;
        var collCount = 0;

        while((this.randKey = Math.floor(Math.random() * this.msgAry.length))
            === currRandKey) {
            collCount += 1;
        };

        return collCount;
    }

    , next: function(){
        var collCount = this.updateRandKeyAndCollCount();
        var message = this.msgAry[this.randKey];
        this.callback(this.randKey, message, collCount, this.msgAry.length-1);
        return message;
    }
};
  
function RandMsgReporter(outputFunc) {
    this.outputFunc = outputFunc;
}

RandMsgReporter.prototype = {
    text : ""
    , outputFunc : null
    , padChar : "0"
    , newLine : "\n"
    , appendText : false
  
    , pad : function(number, length) {
        var text = length.toString().replace(/./g, this.padChar)
        , numberDigits = Math.floor(Math.max(0, Math.log(number))
          / Math.LN10) + 1;
      
        return text.substr(0, text.length - numberDigits) + number;
    }
 
    , print : function(randKey, randMsg, collCount, maxKey) {
          var i;
          var localText = ""

          for (i = 0; i < collCount; i++) {
              localText += "Collision!" + this.newLine;
          }
        
          localText += "Key: " + this.pad(randKey, maxKey) + " Value: "
    + randMsg + (this.appendText ? this.newLine: "");
          
          if(this.appendText)
              this.text = localText + this.text; // Prepend
          else
              this.text = localText;

          if(this.outputFunc) this.outputFunc(this.text);
      }
};
    
$(window).on('load', function () {
    // Writes to console
    var consoleReporter = new RandMsgReporter(console.log.bind(console));

    // Writes to html element
    var output = $("#output");
    var htmlReporter = new RandMsgReporter(output.html.bind(output));
    htmlReporter.newLine = "<br>";
    htmlReporter.appendText = true;

    var firstNames = new RandMsgGen(['John', 'Micheal', 'Kenneth', 'Douglas', 'Matthew', 'Jack', 'James', 'Samuel', 'Peter', 'Sean', 'Xavier'], htmlReporter.print.bind(htmlReporter));
    var middleInitials = new RandMsgGen(['A.','B.','C.','D.','E.','F.','G.','H.']);
    var lastNames = new RandMsgGen(['Smith', 'McDonald', 'Leigh', 'Howzer', 'Adams', 'Santos', 'Lee', 'Jefferson', 'Washington', 'Lincoln'], consoleReporter.print.bind(consoleReporter));
    
    $('#getKey').on('click', function () {
        alert(firstNames.next() + " " + middleInitials.next() + " " + lastNames.next());
    });
});​