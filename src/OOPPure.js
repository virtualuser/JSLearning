// No known copyright
// Given me by unknown on the irc.freenode.net ##javascript channel

var base = {
    a: 0,
   
    method1: function() {
        this.a = this.a + 1;
    },
    
    method2: function() {
        this.a = this.a + 2;
    }
};

function extend(base, properties) {
    // create an object with the [[Prototype]] property set to base
    var o = Object.create(base);
    
    // copy over properties from the object passed in
    for ( var p in properties ) o[p] = properties[p];

    // return the object that has the right [[Prototype]] property, and own properties (own properties being the ones set dirctly on an object
    return o;
}

var e = extend(base, { a: 34 });

e.method1() // now i can call that directly on the object itself

console.log('e.a is: ', e.a)
console.log('base.a is still: ', base.a)
console.log(e.method1 === base.method1);