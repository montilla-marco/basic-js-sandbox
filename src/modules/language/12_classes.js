/* JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar
over JavaScript's existing prototype-based inheritance. The class syntax does not
introduce a new object - oriented inheritance model to JavaScript. */
function Person(name, genre) {
  function sayHello() {
    console.log('Hello!!');
  }

  function toString() {
    console.log('name: ' + name + ' ' + 'genre' + genre);
  }
}
let person = new Person('Marco', 'male');
/* Person { }
    __proto__:
    constructor: ƒ Person()
    __proto__: Object */

/* [[Scopes]]: Scopes[3]
0: Closure { person: Person, animal: Animal, _classCallCheck: ƒ, _defineProperties: ƒ, _createClass: ƒ }
1: Script { nextPromptResult: false, recordedPrompt: null, nextConfirmationResult: false, originalPrompt: ƒ, originalConfirmation: ƒ, … }
2: Global { parent: Window, opener: null, top: Window, length: 0, frames: Window, … } */

class Animal {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }

  greu() {
    console.log('greugreugreugreu!!');
  }

  toString() {
    console.log('name: ' + this.name + ' ' + 'genre: ' + this.genre); // in classes you have to use this
  }
}
let animal = new Animal('tiger', 'male');
/* Animal { } 
  __proto__:
  constructor: ƒ Animal()
  greu: ƒ greu()
  __proto__: Object */

/* [[Scopes]]: Scopes[4]
0: Closure { Animal: ƒ }
1: Closure { person: Person, animal: Animal, _classCallCheck: ƒ, _defineProperties: ƒ, _createClass: ƒ }
2: Script { nextPromptResult: false, recordedPrompt: null, nextConfirmationResult: false, originalPrompt: ƒ, originalConfirmation: ƒ, … }
3: Global { parent: Window, opener: null, top: Window, length: 0, frames: Window, … } */

export default function Classes() {
  console.log('person', person);
  console.log('person.toString', person.toString);
  //person.toString ƒ toString() { [native code] }
  console.log('person.toString', person.toString());

  console.log('animal', animal);
  console.log('animal.toString', animal.toString);
  /* animal.toString ƒ toString() {
    console.log('name: ' + name + ' ' + 'genre' + genre); // in classes you have to use this
  } */
  console.log('animal.toString', animal.toString());

  let people = new Object();
  people.name = "Nicholas";
  people.age = 29;
  people.sayHello = () => console.log('name: ' + this.name + ' ' + 'age: ' + this.age); 
  console.log('people', people);
}
/**
 * ECMA-262 defines an object as an unordered collection of properties. Strictly speaking, this
 * identified by a name that is mapped to a value. For this reason (and others yet to be discussed),
 * it helps to think of ECMAScript objects as hash tables: nothing more than a grouping of namevalue
 * pairs where the value may be data or a function.
 * means that an object is an array of values in no particular order. Each property or method is
 * identified by a name that is mapped to a value. For this reason (and others yet to be discussed),
 * pairs where the value may be data or a function.
 * it helps to think of ECMAScript objects as hash tables: nothing more than a grouping of namevalue
 */

/* Types of Properties
ECMA - 262 describes characteristics of properties through the use of internal - only attributes.These
attributes are defined by the specification for implementation in JavaScript engines, and as such, these
attributes are not directly accessible in JavaScript.To indicate that an attribute is internal, surround
the attribute name with two pairs of square brackets, such as [[Enumerable]].
There are two types of properties: data properties and accessor properties. */

/* Data Properties
Data properties contain a single location for a data value.Values are read from and written to this
location.Data properties have four attributes describing their behavior:
  ➤➤[[Configurable]]—Indicates if the property may be redefined by removing the property
    via delete, changing the property’s attributes, or changing the property into an accessor
    property.By default, this is true for all properties defined directly on an object, as in the
    previous example.
  ➤➤[[Enumerable]]—Indicates if the property will be returned in a for-in loop.By default,
    this is true for all properties defined directly on an object, as in the previous example.
  ➤➤[[Writable]]—Indicates if the property’s value can be changed.By default, this is true for
    all properties defined directly on an object, as in the previous example.
  ➤➤[[Value]]—Contains the actual data value for the property.This is the location from which
    the property’s value is read and the location to which new values are saved.The default
    value for this attribute is undefined. 
    */