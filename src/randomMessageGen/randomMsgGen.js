// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function RandMsgGen(msgAry) {
    'use strict';

    if (typeof msgAry === 'undefined' || !Array.isArray(msgAry)
        || (this.aryLen = msgAry.length) < 1) {
        if (typeof console != 'undefined') {
            console.log('RandMsgGen(): Invalid parameter(s)');
        }
        return undefined;
    };
    this.msgAry = msgAry;
};

RandMsgGen.prototype = {
    
    msgAry: []
    , aryLen: 0
    , randKey: 0
    , collCount: 0
    , text: ''
    , padChar: '0'
    
    , updateRandKeyAndCollCount: function () {
        'use strict';
        
        var currRandKey = this.randKey;
        
        this.collCount = 0;

        while((this.randKey = Math.floor(Math.random() * this.aryLen))
            === currRandKey) {
            this.collCount += 1;
        };
    }
    
    , pad: function () {
        'use strict';
        
        var text = this.aryLen.toString().replace(/./g, this.padChar)
        , randKeyDigits = Math.floor(Math.max(0, Math.log(this.randKey))
            / Math.LN10) + 1;
        
        return text.substr(0, text.length - randKeyDigits);
    }

    , print: function () {
        'use strict';
        
        var i;
        
        this.updateRandKeyAndCollCount();
        
        for (i = 0; i < this.collCount; i++) {
            this.text += "Collision!<br />";
        }
        
        this.text += "Key: " + this.pad() + this.randKey + " Value: "
            + this.msgAry[this.randKey] + "<br />";
        $('#output').html(this.text);        
    }
}

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
    var randMsgGen = new RandMsgGen(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
//    var randMsgGen = new RandMsgGen();
    
    if (randMsgGen.msgAry.length === 0) {
        return;
    }
    
    $('#getKey').on('click', function () {
        randMsgGen.print()
    });
});