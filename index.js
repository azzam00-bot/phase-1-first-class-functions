// // index.js

// // The receivesAFunction function
// function receivesAFunction(callback) {
//   callback();
// }

// // The returnsANamedFunction function
// function returnsANamedFunction() {
//   function namedFunction() {
//     console.log("This is a named function");
//   }
//   return namedFunction;
// }

// // The returnsAnAnonymousFunction function
// function returnsAnAnonymousFunction() {
//   return function() {
//     console.log("This is an anonymous function");
//   };
// }

// // Example usage of the functions

// // Using receivesAFunction
// receivesAFunction(function() {
//   console.log("Callback function is called");
// });

// // Using returnsANamedFunction
// const namedFunc = returnsANamedFunction();
// namedFunc();

// // Using returnsAnAnonymousFunction
// const anonymousFunc = returnsAnAnonymousFunction();
// anonymousFunc();

// app.js

// returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = function(drivers, returnDrivers) {
  return returnDrivers(drivers);
};

// Call returnFirstTwoDrivers
const drivers = ['John', 'Jane', 'Mike', 'Sarah' , 'azzam'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); // Output: ['John', 'Jane']

// Call returnLastTwoDrivers
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers); // Output: ['Mike', 'Sarah']

// Access selectingDrivers array
console.log(selectingDrivers); // Output: [returnFirstTwoDrivers, returnLastTwoDrivers]

// Call createFareMultiplier
const fareMultiplier = createFareMultiplier(2);
const fare = 10;
const multipliedFare = fareMultiplier(fare);
console.log(multipliedFare); // Output: 20

// Call fareDoubler
const doubledFare = fareDoubler(fare);
console.log(doubledFare); // Output: 20

// Call fareTripler
const tripledFare = fareTripler(fare);
console.log(tripledFare); // Output: 30

// Call selectDifferentDrivers
const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers); // Output: ['John', 'Jane']
