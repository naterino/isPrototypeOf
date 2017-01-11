(function () {
  'use strict';
  function isPrototypeOf(prototypeObj, object) {
    if (prototypeObj === null || typeof prototypeObj === 'undefined') { // Error Checking
      if (prototypeObj === null) {
        throw new TypeError('Cannot execute \'isPrototypeOf\' on object with value of null');
      } else {
        throw new TypeError('Cannot execute \'isPrototypeOf\' on undefined object');
      }
    }

    if (arguments.length > 1) {
      var currentProto = Object.getPrototypeOf(object); // Create variable to hold the object prototype
      while (currentProto !== null) { // Use while loop to go through prototype chain
        if (prototypeObj === currentProto) {
          return true;
        }
        currentProto = Object.getPrototypeOf(currentProto); // One step further down the chain
      }
    }
    return false; // Either only 1 valid arg or failed to find a match in prototypes.
  }

  window.isPrototypeOf = isPrototypeOf;
})();

