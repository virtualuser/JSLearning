var toString = Object.prototype.toString,
    not = function (fn) {
        // simply invert logic:
        //   if fn returns true, this makes it false
        //   and vice-versa
        return function () {
            return !fn.apply(this, arguments);
        };
    };

// Better than typeof
function theTypeOf(thing) {
    var type = toString.call(thing);
    return type.toLowerCase().match(/^\[object (.+)\]$/)[1];
}

// return the value of 'key' from object 'obj'
function pluck(obj, key) {
    return obj[key];
}

// return true if 'v' is 'type'
function isTypeOf(type, v) {
    return theTypeOf(v) === type;
}

// negated typeof
var isNotTypeOf = not(isTypeOf);

// this is a partial application
var isNotNumber = isNotTypeOf.bind(null, "number");

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
    },
    valueKeys = ['foo', 'bar', 'baz'];

function aeorilWearsSillyPants(o) {
    // Pull out the values from the keys we care about
    var values = valueKeys.map(pluck.bind(null, o));

    // Check to make sure they are NOT NaN and ARE a number
    if (values.some(isNaN) || values.some(isNotNumber)) {
        return false;
    }

    // Your fancy calculations
    return true;
}

console.log(aeorilWearsSillyPants(wNaN));
console.log(aeorilWearsSillyPants(noNaN));
console.log(aeorilWearsSillyPants(wString));