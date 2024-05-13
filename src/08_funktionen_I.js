
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


/* test();

function test() 
{
    console.log("Hallo Trung"); 
} */




outputNames();

function outputNames() 
{
    let firstName = "Trung"
    console.log("Hallo, "+firstName+"!");

}


outputNames2("Trung");

function outputNames2(firstName) 
{
    console.log("Hallo, "+firstName+"!");
}


outputNames3("Trung", "Nguyen");

const prompt = require('prompt-sync')({sigint: true});
outputNames3(prompt("Vorname?: "), prompt("Nachname?: "));

function outputNames3(firstName, familyName) 
{
    console.log("Hallo, "+firstName+" "+familyName+"!");
}