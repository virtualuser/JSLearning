// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function RandMsgGen(msgAry, writer) {
    'use strict';

    if (typeof writer !== 'undefined') {
        if (typeof writer === 'Function') {
            this.writer = writer;
        } else {
            if (typeof console != 'undefined') {
                console.log('RandMsgGen(): Invalid parameter - callBackt');
            }
            return;
        }
    }
    if (typeof msgAry === 'undefined' || !Array.isArray(msgAry)
        || (this.aryLen = msgAry.length) < 1) {
        if (typeof console != 'undefined') {
            console.log('RandMsgGen(): Invalid parameter - msgAry');
        }
        return;
    };
    this._MsgAry = msgAry;
    this._AryLen = msgAry.length;
};

RandMsgGen.prototype = {
    _MsgAry: []
    , _AryLen: 0
    , _RandKey: -1
    , _PadChar: '0'
    , _Text: ''
    , _Wrap: false
    
    , next: function () {
        'use strict';

        var currRandKey = this.randKey
        , collCount = 0;
        
        if (aryLen === 0) {
            if (typeof console !== 'undefined') {
                console.log('randMsgKey.prototype.updateRandKey(): aryLen === 0')
            }
            return 0;
        }
        
        while ((this.randKey = Math.floor(Math.random() * this.aryLen))
            === currRandKey) {
            this.collCount += 1;
        };
        this.writer(this.randKey, this.msgAry[this.randKey], this.collCount);
    }
    , pad() {
        'use strict';

        if (aryLen === 0) {
            if (typeof console !== 'undefined') {
                console.log('randMsgKey.prototype.pad(): aryLen === 0')
            }
            return '';
        }

        var text = this.aryLen.toString().replace(/./g, this.padChar)
        , randKeyDigits = Math.floor(Math.max(0, Math.log(this.randKey))
            / Math.LN10) + 1;

        return text.substr(0, text.length - randKeyDigits);
    }

    , writer: function (outFunc) {
        'use strict';        
        
        var i
        , text = '';

        if (typeof console.log !== 'undefined') {
            if (typeof key !== 'number' || typeof msg != 'string'
                || typeof collCount !== 'number') {
                console.log('Error: RandMsgGen.prototype.processMsg(): '
                    + 'Invalid Parameter(s)');
            }
            console.log(key, msg, collCount);
        }
    }
}   

//document.getElementById('click-me').addEventListener('click', setup(), false);
$(window).on('load', function () {
    'use strict';
    
//    var randMsgGen = new RandMsgGen(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
//    var randMsgGen = new RandMsgGen();
    
    $('#getMsg').on('click', function () {
        new RandMsgGen(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], function (key, msg, collCount) {

            'use strict';        
        
            var i
            , text = '';

            if (typeof key !== 'number' || typeof msg != 'string'
                || typeof collCount !== 'number') {
                if (typeof console.log !== 'undefined') {
                    console.log('Error: RandMsgGen.prototype.processMsg(): '
                        + 'Invalid Parameter(s)');
                }
            }

            for (i = 0; i < collCount; i++) {
                text += "Collision!<br />";
            }
            text += "Key: " + this.pad() + key + " Value: "
                + msg + "<br />";
            $('#output').html($('$output').html() + text);        
        }()
    )});
});