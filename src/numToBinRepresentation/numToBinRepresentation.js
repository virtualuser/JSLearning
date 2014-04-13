// Copyright © 2013 Scott Sanbar.  MIT License (see http://opensource.org/licenses/MIT)
// Original Author:  ImBcmDth - Jon-Carlos Rivera.  Updated by Scott Sanbar

function intToBinStrPad(i, l) {
    var s = i.toString(2),
        n = (l || 32) + 1 - s.length;
    return new Array(n).join('0') + s;
}

function processElem (element) {

    var newStrIndex = this.strIndex - element.numBits,
        ss = this.s.substring(newStrIndex < 0 ? 0 : newStrIndex, this.strIndex);

    this.strIndex = newStrIndex;

    if (this.result.splice) {
        this.result.splice(0, 0, ss);
    } else {
        this.result[element.name] = ss;
    }
}

function binStrToObjOrAry(str, res, attrs, repeat) {
    var i,
        j,
        attrsCopy = attrs.slice(0),
        attrsTemp = [],
        persist = {s: str, strIndex: str.length, result: res};

    if (attrsCopy.length === 1 && repeat) {
        j = Math.ceil(str.length / attrsCopy[0].numBits);
        for (i = 0; i < j; i++) {
            attrsTemp.push({ name: attrsCopy[0].name + (i < 10 ? '0' : '') + i,
                numBits: attrsCopy[0].numBits });
        }
        attrsCopy = attrsTemp;
    }

    attrsCopy.reverse().forEach(processElem, persist);

    return persist.result;
}

var numToBinObjOrAry = function (num, res, attrs, repeat) {
    'use strict';

    var b = new ArrayBuffer(8),
        f = new Float64Array(b),
        i = new Uint32Array(b);

    f[0] = num;

    var whole = intToBinStrPad(i[1]) + intToBinStrPad(i[0]);
    //console.dir([whole, whole.length]);

    return binStrToObjOrAry(whole, res, attrs, repeat);
};

function binObjToStr(obj, attrs, divider) {
    var i,
        str = '';

    if (attrs.length === 1) {
        for (i = 0; i < Object.keys(obj).length; i++) {
            str += (i ? divider : '') + obj[attrs[0].name + (i < 10 ? '0' : '') + i];
        }
    } else {
        for (i = 0; i < attrs.length; i++) {
            str += (i ? divider : '') + obj[attrs[i].name];
        }
    }
    return str;
}

function binAryToStr(ary, divider) {
    return ary.join(divider);
}

var num = 0x88442211,
    attrs1 = [{name: 'Group', numBits: 3 }],
    attrs2 = [{ name: 'Sign', numBits: 1 }, { name: 'Exponent', numBits: 11 }, { name: 'Mantissa', numBits: 52 }],
    obj1 = numToBinObjOrAry(num, {}, attrs1, true),
    obj2 = numToBinObjOrAry(num, {}, attrs2),
    ary1 = numToBinObjOrAry(num, [], attrs1, true),
    ary2 = numToBinObjOrAry(num, [], attrs2);

//console.dir([obj1, obj2, num, '0x' + num.toString(16)]);
console.dir([obj1, binObjToStr(obj1, attrs1, ' '), obj2, binObjToStr(obj2, attrs2, ' '), num, '0x' + num.toString(16)]);
//console.dir([ary1, ary2, num, '0x' + num.toString(16)]);
console.dir([ary1, binAryToStr(ary1, ' '), ary2, binAryToStr(ary2, ' '), num, '0x' + num.toString(16)]);
var x = NaN; if (x !== x) 'Is NaN'; else 'Isn\'t NaN';/*
 var num = ~0x0f;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = -0x0f - 1;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = 0x0f;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = -0x0f;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = 0x81422418;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = -0x81422418;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = ~0x81422418 + 1;
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));

 num = -(~0x81422418 + 1);
 console.log(intToBinStr(num, 32, 4, ' '), num, num.toString(16));
 */