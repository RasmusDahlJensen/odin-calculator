//TODO: Gem historik værdien i num2
//Få operatoren til at kalde udregningsfunktionen hvis num2 findes
//Ellers så skub num1 til at være num2 hvis num2 ikke findes og man trykker på en operator

//Grab button ID
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
	button.setAttribute("onclick", "buttonId(this.id)");
});

//Display function
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

let num1 = undefined;
let num2 = undefined;
let operatorValue;

const buttonId = (value) => {
	firstNumber.innerHTML += value;
	num1 = firstNumber.innerHTML;
};

//Get all operators
const operator = document.querySelectorAll(".operator");
operator.forEach((button) => {
	button.setAttribute("onclick", "addOperatorValue(this.innerHTML)");
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
	// console.log("equals work");
	processNumbers();
});

const addOperatorValue = (value) => {
	const operatorDisplay = document.getElementById("operator");
	if (num1 === undefined) {
		operatorValue = value;
		operatorDisplay.innerHTML = operatorValue;
		return;
	} else {
		operatorValue = value;
		operatorDisplay.innerHTML = operatorValue;
		let num1 = firstNumber.innerHTML;
		processNumbers(num1);
	}
};

const processNumbers = (num1Value) => {
	if (typeof num2 === "undefined") {
		num2 = +num1Value;
		num1 = "";
		secondNumber.innerHTML = num2;
		firstNumber.innerHTML = "";
	} else if (typeof num2 === "number") {
		let num1 = firstNumber.innerHTML;
		compileNumbers(num1, num2, operatorValue);
	}
};

const clearFunc = () => {
	const operatorDisplay = document.getElementById("operator");
	num1 = undefined;
	num2 = undefined;
	firstNumber.innerHTML = "";
	secondNumber.innerHTML = "";
	operatorDisplay.innerHTML = "";
	operatorValue = undefined;
};

//clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", clearFunc);

const compileNumbers = (num1Value, num2Value, operatorValue) => {
	console.log(num2Value, operatorValue, num1Value);
	switch (operatorValue) {
		case "+":
			add(+num2Value, +num1Value);
			break;
		case "-":
			subtract(+num2Value, +num1Value);

			break;
		case "*":
			multiply(+num2Value, num1Value);
			break;
		case "/":
			divide(+num2Value, +num1Value);
			break;

		default:
			break;
	}
};

//Math functions

const clearDisplay = () => {};

const add = (num1, num2) => {
	displayResult(num1 + num2);
};

const subtract = (num1, num2) => {
	displayResult(num1 - num2);
};

const multiply = (num1, num2) => {
	displayResult(num1 * num2);
};

const divide = (num1, num2) => {
	if (!num1 > 0 || !num2 > 0) {
		return console.log("ERROR");
	} else {
		displayResult(num1 / num2);
	}
};

const displayResult = (result) => {
	clearFunc();
	num2 = result;
	secondNumber.innerHTML = result;
};
