/*

Beasts Issue # 4 - isPrototypeOf:

In AccountingJS 8 and 9, you learned about JavaScript's prototype system. This challenge builds on those videos.

Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf. Since your solution will be called as a function rather than a method, the way you use it will be slightly different, but the outcome should be the same.

Obviously, don't use Object.prototype.isPrototypeOf in your solution, but feel free to use other methods on Object.prototype.

var dog = {
  fetch: function() {
    console.log(fetch);
  }
};

var myDog = Object.create(dog);
var empty = Object.create(null);

// These two lines are equivalent.
dog.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(dog, myDog); // your function does the same

// These two lines, similarly should return the same thing.
dog.isPrototypeOf(empty);  // native function returns false
isPrototypeOf(dog, empty); // your function does the same

// This should work too.
Object.prototype.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(Object.prototype, myDog); // your function does the same

*/

tests({

  'It should return true if prototypeObj is the prototype of object.': function() {
    var skater = { 
        kickflip: function() {
            console.log("*Does a kickflip*");
        }
    };
    var tyler = Object.create(skater);
    var testResult = isPrototypeOf(skater, tyler);

    eq(testResult, true);
  },

  'It should return true if prototypeObj is anywhere on the prototype chain of object.': function() {
    var ninja = { 
        backflip: function() {
            console.log("*Does a triple backflip*");
        }
    };
    var reptile = Object.create(ninja);
    var testResult = isPrototypeOf(Object.prototype, reptile);

    eq(testResult, true);
  },

  'It should return false if prototypeObj is not on the prototype chain of object.': function() {

    var vincent = {};
    var tony = {};

    var testResult = isPrototypeOf(vincent, tony);

    eq(testResult, false);
  },

  'It should return false if obj is null': function() {

    var dog = {
      fetch: function() {
        console.log(fetch);
      }
    };

    var myDog = Object.create(dog);
    var empty = Object.create(null);

    var testResult = isPrototypeOf(dog, empty);

    eq(testResult, false);
  },

  'It should return false if one object is entered for the arguments.': function() {

    var barbara = {};

    var testResult = isPrototypeOf(barbara);

    eq(testResult, false);
  },



  'It should throw an exception if prototypeObj is undefined with one arg.': function () {
    var thrownError,
    errorTestObject;

    try {
      isPrototypeOf(errorTestObject);
    }
    catch (e) {
      thrownError = true;
      eq(e instanceof TypeError, true);
    }

    eq(thrownError, true);
  },

  'It should throw an exception if prototypeObj is undefined with two args.': function () {
    var thrownError2,
    errorTestObject2,
    workingObject = {};

    try {
      isPrototypeOf(errorTestObject2, workingObject);
    }
    catch (e) {
      thrownError2 = true;
      eq(e instanceof TypeError, true);
    }


    eq(thrownError2, true);
  },
});