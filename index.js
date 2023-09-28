// index.js

// The receivesAFunction function
function receivesAFunction(callback) {
  callback();
}

// The returnsANamedFunction function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("This is a named function");
  }
  return namedFunction;
}

// The returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function");
  };
}

// Example usage of the functions

// Using receivesAFunction
receivesAFunction(function() {
  console.log("Callback function is called");
});

// Using returnsANamedFunction
const namedFunc = returnsANamedFunction();
namedFunc();

// Using returnsAnAnonymousFunction
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();
