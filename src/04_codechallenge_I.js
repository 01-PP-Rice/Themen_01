
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let zahl1 = prompt ("Bitte gib die erste Zahl ein: ");
let zahl2 = prompt ("Bitte gib die zweite Zahl ein: ");
let summe = parseInt(zahl1) + parseInt(zahl2);
console.log ("Die Summe aus den Zahlen ergibt: "+summe);
