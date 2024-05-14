

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const ERROR_STR_GEN = "Irgendwas ist schief gelaufen"

// module: calculator | tests:
// agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

function calculator(a,b,op){

		switch (op) {
			case "+":
				return addition(a,b);
			case "-":
				return subtraction(a,b);
			case "*":
				return multiplication(a,b);
			case "/":
				return division(a,b);
			default:
				return ERROR_STR_GEN
		}

}


// module: division a / b |  test:
// output(division(4,2));
// output(division(3,2));
// output(division(3,-2));
// output(division(0,2));
// output(division(3,0));
// output(division(0,0));
function division(a,b) {

	if (b == 0) {
		return "Error: Divided by 0!";
	} else {
		return a/b
	}

}

// module: multiplication a * b |  test:
// output(multiplication(3,2));
// output(multiplication(3,-2));
// output(multiplication(3,0));
function multiplication(a,b) {
	return a*b
}

// module: subtraction a - b |  test:
// output(subtraction(3,2));
// output(subtraction(3,-2));
// output(subtraction(3,0));
// output(subtraction(0,2));
function subtraction(a,b) {
	return a-b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function addition(a,b) {
	return a+b;
}


// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  