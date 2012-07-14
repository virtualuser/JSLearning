// Copyright © 2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

function Foo() {this.cb = function () {console.log(this)}};

var f = new Foo(),
    elem = {aProp: 'aProp', addCallBack: function (cb) {this.cb = function () {cb.call(this)}}};

elem.addCallBack(f.cb);
f.cb();
elem.cb();

