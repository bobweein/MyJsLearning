"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("i can drive :D");

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with  ${apples} apples and ${oranges} oranges .`;

//   return juice;
// }

// console.log(fruitProcessor(3, 9));
// // function declaration
// const age = calcAge1(2001);
// console.log(age);

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// //  function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2001);
// console.log(age2);

// // arrow function
// const calcAge3 = (birthYear) => 2027 - birthYear;

// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUnitRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUnitRetirement(1991));

// functions calling Other functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with  ${applePieces} pieces of apple
//   and ${orangePieces} pieces of orange .`;

//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);

// add(5, 1, 32, 4);

// add(2, 1, 3, 4, 5, 6, 7, 8);

// const x = [23, 5, 7];

// add(...x);

// const y = "advdc";

// add(...y);

// const numgusets = 0;
// const guest = numgusets || 10;
// console.log(guest);

//nullish : null and undefined (not 0 or '')

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);
