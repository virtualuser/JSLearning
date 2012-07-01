// Original Author:  ImBcmDth - irc.freenode.net - ##javascript channel
// Jon-Carlos Rivera - see THANKS File

Object.prototype.deepCopy = function () {

    function clone (thing) {

        if (thing ===  null           ||
            typeof thing === 'number' ||
            typeof thing === 'string' ||
            typeof thing === 'boolean') {

            return thing;
        }

        if (typeof thing === 'undefined') {
            return undefined;
        }

        var copy = Array.isArray(thing) ? [] : {};

        Object.getOwnPropertyNames(thing).forEach(function (prop) {
            copy[prop] = clone(thing[prop]);
        });

        return copy;
    };

    return clone(this);

};

Object.prototype.deepCopy2 = function () {

    function clone (thing) {

        if (thing ===  null           ||
            typeof thing === 'number' ||
            typeof thing === 'string' ||
            typeof thing === 'boolean') {

            return thing;
        }

        if (typeof thing === 'undefined') {
            return undefined;
        }
    
        var copy = Array.isArray(thing) ? [] : {};
//        Object.getOwnPropertyNames(thing).forEach(function (prop) {
//            copy[prop] = clone(thing[prop]);
//        });

        return copy;
    };

    return clone(this);

};

function Foo() {
    var a = 'a';
    
    this.Bar = Bar;
    
    function Bar() {
        return a;
    }
}

function Baz() {
    var c = 'c';
    
    this.Bat = Bat;
    
    function Bat() {
        return c;
    }
}
Baz.prototype = new Foo();

var o = new Foo();

var o2 = o.deepCopy();

//console.log(o.Bar());

//var p = new Baz();

//var p2 = p.deepCopy2();