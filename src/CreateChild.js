// Copyright 2011-2012 Scott Sanbar.  See COPYRIGHT file for details
// Original Author:  Scott Sanbar - scott.sanbar@gmail.com

var Foo = {  
    count: 'Foo',
    changeBy: function(val) {  
        this.count += val;  
    },  
    inc: function() {  
        this.changeBy(1);  
    },  
    dec: function() {  
         this.changeBy(-1);  
    },  
    val: function() {  
         return this.count;  
    }  
};

var Bat = {
    count: 25,
    batVar: 'batVar',
    batFunc: function(x) {
        return this.count + x;
    }
};

function createChild(parent, argObj) {
    var obj = Object.create(parent);
    for (var n in argObj) {
       obj[n] = argObj[n];
    }
    return obj;
}

function Bar() {
    var f1 = createChild(Foo, {count: 1}),
        f2 = createChild(Foo, {count: 2, f2Var: 'f2Var'}),
        f3 = createChild(Foo, {f3Var: 'f3Var'}),
        f4 = createChild(Foo, {}),
        f5 = createChild(Foo, Foo),
        f6 = createChild(Foo, Bat);

    console.log('f1.val = ' + f1.val());
    console.log('f2.val = ' + f2.val() + ' f2.f2Var = ' + f2.f2Var);
    console.log('f3.val = ' + f3.val() + ' f3.f3Var = ' + f3.f3Var);
    console.log('f4.val = ' + f4.val());
    console.log('f5.val = ' + f5.val());
    console.log('Foo.val = ' + Foo.val());
    console.log('f1.inc === f2.inc '+ (f1.inc === f2.inc));
    console.log('f1.changeBy === Foo.changeBy ' + (f1.changeBy === Foo.changeBy));
    console.log('f5.changeBy === Foo.changeBy ' + (f5.changeBy === Foo.changeBy));
    console.log('f6.batFunc() ' + f6.batFunc(6));
}