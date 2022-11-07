//Grab button ID
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
	button.setAttribute("onclick", "buttonId(this.id)");
});

let num1 = [];
let num2 = [];
let operatorValue;

//Display function
const resultDisplay = document.getElementById("result");
const buttonId = (buttonid) => {
	resultDisplay.innerHTML += buttonid;
	if (operatorValue === undefined) {
		num1.push(buttonid);
	} else {
		num2.push(buttonid);
	}
};

//Get all operators
const operator = document.querySelectorAll(".operator");
operator.forEach((button) => {
	button.setAttribute("onclick", "addOperatorValue(this.innerHTML)");
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
	if (num2.length > 0) {
		let completeNumber1 = num1.join("");
		let completeNumber2 = num2.join("");
		compileNumbers(completeNumber1, completeNumber2, operatorValue);
	}
});

const addOperatorValue = (value) => {
	const history = document.getElementById("history");
	const operatorDisplay = document.getElementById("operator");
	if (num1.length === 0) {
		return;
	} else {
		operatorValue = value;
		operatorDisplay.innerHTML = operatorValue;
	}
	if (num2.length > 0) {
		let completeNumber1 = num1.join("");
		let completeNumber2 = num2.join("");
		compileNumbers(completeNumber1, completeNumber2, operatorValue);
	}

	//FIXME: You can add a operator before the first value
	history.innerHTML = resultDisplay.innerHTML;
	resultDisplay.innerHTML = "";
};

//clear button
const history = document.getElementById("history");
const operatorDisplay = document.getElementById("operator");
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
	resultDisplay.innerHTML = "";
	num1 = [];
	num2 = [];
	history.innerHTML = "";
	operatorDisplay.innerHTML = "";
	operatorValue = undefined;
});

const compileNumbers = (num1Value, num2Value, operatorValue) => {
	console.log(num1Value, num2Value, operatorValue);
	switch (operatorValue) {
		case "+":
			add(+num1Value, +num2Value);
			break;
		case "-":
			console.log("minus");
			break;
		case "*":
			console.log("times");
			break;
		case "/":
			console.log("divide");
			break;

		default:
			break;
	}
};

//Math functions

const clearDisplay = () => {
	history.innerHTML = "";
	operatorDisplay.innerHTML = "";
	operatorValue = undefined;
	resultDisplay.innerHTML = "";
	num1 = [];
};

const add = (num1, num2) => {
	clearDisplay();
	let result = num1 + num2;
	num2 = result;
	return (history.innerHTML = num1 + num2);
};

const subtract = (num1, num2) => {
	return console.log(num1 - num2);
};

const multiply = (num1, num2) => {
	return console.log(num1 * num2);
};

const divide = (num1, num2) => {
	if (!num1 > 0 || !num2 > 0) {
		return console.log("ERROR");
	} else {
		return console.log(num1 / num2);
	}
};

//TODO: Have a history display on the calculator to show the last two operations
// TODO: Only have the calculator evaluate a single number at a time
//When there's two numbers already being evaluated pressing an operator should equal the previous two numbers together
//And then incoorporate the new number
//For example if i do 5+5 and then press - it should do the first calculation to 10 and then it should listen to what it should
//Minus with
//TODO: Have each number and each decimal be input into an array
//let num1 and num2 be an empty array and use the push() method to add new numbers to the end
//and use join("") to join them together when they need to be evaluated
//Maybe create new variables for the array and put them into another variable when joined
//TODO: make a backspace button to call the pop() method on the array
//TODO: Round the numbers and make sure they can't overflow the screen and limit to only 1 decimal per number
//TODO: Make sure the equals = operator can't be used before all of the numbers and operators are used.
