const calculateAverage = require('./utils/calculateAverage/calculateAverage');
const calculatePercentage = require('./utils/calculatePercentage/calculatePercentage');
const calculateSimpleInterest = require('./utils/calculateSimpleInterest/calculateSimpleInterest');
const calculateTriangleArea = require('./utils/calculateTriangleArea/calculateTriangleArea');
const convertCelsiusToFahrenheit = require('./utils/convertCelsiusToFahrenheit/convertCelsiusToFahrenheit');
const findMax = require('./utils/findMaxMin/findMax');
const findMin = require('./utils/findMaxMin/findMin');
const generateRandomNumber = require('./utils/generateRandomNumber/generateRandomNumber');
const isInRange = require('./utils/isInRange/isInRange');
const isOddOrEven = require('./utils/isOddOrEven/isOddOrEven');
const moduloOperation = require('./utils/moduloOperation/moduloOperation');
const roundToNearest = require('./utils/roundToNearest/roundToNearest');
const sumOfDigits = require('./utils/sumOfDigits/sumOfDigits');

console.log('Write Code Here');

// ODD EVEN

// Add console.log(s) below testing multiple scenarios for each function
const userId1 = 1024;
const userId2 = 357;
const userId3 = 'abc';
console.log(
  `User with ID ${userId1} is routed to the ${isOddOrEven(userId1)} server.`
); // Output: User with ID 1024 is routed to the even server.

console.log(
  `User with ID ${userId2} is routed to the ${isOddOrEven(userId2)} server.`
); // Output: User with ID 357 is routed to the odd server.

// console.log(
//   `User with ID ${userId3} is routed to the ${isOddOrEven(userId3)} server.`
// ); // Output: Input must be a number

// CALCULATE PERCENTAGE

const completedModules = 7;
const totalModules = 10;

console.log(
  `You've completed ${calculatePercentage(
    completedModules,
    totalModules
  )}% of the course.`
); // Output: You've completed 70.00% of the course.

const completedTasks = 3;
const totalTasks = 5;

console.log(
  `You've completed ${calculatePercentage(
    completedTasks,
    totalTasks
  )}% of your tasks.`
);
// Output: You've completed 60.00% of your tasks.;

// ROUND TO NEAREST INTEGER
console.log(`Rounding 2.6: ${roundToNearest(2.6)}`); // Output: 3
console.log(`Rounding -3.2: ${roundToNearest(-3.2)}`); // Output: -3

// Sum of digits
console.log(`Sum of digits for 456: ${sumOfDigits(456)}`); // Output: 15
console.log(`Sum of digits for -789: ${sumOfDigits(-789)}`); // Output: 24

// Finding Maximum or Minimum
const numbers = [4, -2, 7, 3];
console.log(`Max value: ${findMax(numbers)}`); // Output: 7
console.log(`Min value: ${findMin(numbers)}`); // Output: -2

// Range Check
console.log(isInRange(5, 1, 10)); // true
console.log(isInRange(-5, 0, 10)); // false
console.log(isInRange(-5, 10, -10)); // false
console.log(isInRange(0, 0, 0)); // true

// Random Number Generator
console.log(generateRandomNumber(1, 100)); // Random number between 1 and 100
console.log(generateRandomNumber(-10, 10)); // Random number between -10 and 10

// Simple Interest Calculation
console.log(calculateSimpleInterest(1000, 5, 2)); // 100
console.log(calculateSimpleInterest(5000, 4.5, 3)); // 675

// Area of Triangle
console.log(calculateTriangleArea(10, 5)); // 25
console.log(calculateTriangleArea(15.2, 7.5)); // 57

// Modulo Operation
console.log(moduloOperation(10, 3)); // 1
console.log(moduloOperation(-10, 3)); // -1

// Convert Celsius to Fahrenheit
console.log(convertCelsiusToFahrenheit(0)); // 32
console.log(convertCelsiusToFahrenheit(100)); // 212

// Find Average
console.log(calculateAverage([10, 20, 30, 40])); // 25
console.log(calculateAverage([5, 10, 15, -5])); // 6.25
