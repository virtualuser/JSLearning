// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

var wNaN = {
        somethingElse: "test",
        foo: 1,
        bar: NaN,
        baz: 3
    },
    noNaN = {
        somethingElse: NaN,
        foo: 1,
        bar: 2,
        baz: 3
    },
    wString = {
        somethingElse: 123,
        foo: "1",
        bar: 2,
        baz: 3
    };

function pluck(o, k) {
    return o[k];
}

function isNotTypeOf(type, v) {
    return typeof v !== type;
}

var valueKeys = ['foo', 'bar', 'baz'];

function aeorilWearsSillyPants(o) {
    var values = valueKeys.map(pluck.bind(null, o));

    if (values.some(isNaN)
        || values.some(isNotTypeOf.bind(null, "number"))) {
        return false;
    }

    // Your fancy calculations
    return true;
}

console.log(aeorilWearsSillyPants(wNaN));
console.log(aeorilWearsSillyPants(noNaN));
console.log(aeorilWearsSillyPants(wString));