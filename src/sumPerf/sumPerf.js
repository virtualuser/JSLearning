// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function Sum(a) {
    this.a = a;
    this.sum = function(b) {
        this.a = this.a + b
    }
}

function sum(a, b) {
    return a + b
}
var a = 1,
    b = 2,
    s = new Sum(a);

a = sum(a, b);

s.sum(b);

var v;

function add1(a, b) {
    var c = [],
        i;
    for (i = 0; i < a.length; i++) {
        c.push(a[i] + b[i]);
    }
    return c;
}

function zipWith(f /*, vectors...*/ ) {
    var vectors = Array.prototype.slice.call(arguments, 1);
    return vectors.reduce(function(a, b) {
        return zipWith2(f, a, b)
    })
}

function zipWith2(f, a, b) {
    return a.map(function(ea, i) {
        return f(ea, b[i])
    })
}

function add2(/*arguments...*/) {
    return zipWith.bind(null, function (ea, eb) {
        return ea + eb
    }).apply(null, arguments)
}