// No known Copyright
// Original Author:  FireFly - irc.freenode.net - Jonas Höglund see THANKS File

///////////////
// Library code
///////////////

var Base = {}
// Base#extend
Object.defineProperty(Base, 'extend', {
  enumerable: false,
  value: function(obj) {
    var descs = {}

    ++objectInheritCounter

    Object.getOwnPropertyNames(obj).forEach(function(key) {
      descs[key] = Object.getOwnPropertyDescriptor(obj, key)
    })

    return Object.create(this, descs)
  }
})

///////////////
// Sample Usage
///////////////

var Person = Base.extend({
  // missing: name

  // A person can tell you its name.
  talk: function() {
    return "Hello, I'm " + this.name
  }
})

var WorkingPerson = Person.extend({
  // missing: name, occupation

  // A working person also tells you their occupation when they talk.
  talk: function() {
    return Person.talk.call(this) + " and I am a " + this.occupation
  }
})

var p1 = WorkingPerson.extend({ name:"Harry", occupation:"wizard" })
p1.talk() // "Hello, I'm Harry and I am a wizard"