
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
let year = 2024;
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

let isJohnOlder, isJohnEqual;
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
