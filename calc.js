//Math functions

let add = (num1, num2) => {
	return console.log(num1 + num2);
};

let subtract = (num1, num2) => {
	return console.log(num1 - num2);
};

let multiply = (num1, num2) => {
	return console.log(num1 * num2);
};

let divide = (num1, num2) => {
	if (!num1 > 0 || !num2 > 0) {
		return console.log("ERROR");
	} else {
		return console.log(num1 / num2);
	}
};

//Operate functions - calls a math function depending on operator
let operate = (num1, operator, num2) => {
	if (operator == "add") {
		add(num1, num2);
	}

	if (operator == "subtract") {
		subtract(num1, num2);
	}

	if (operator == "multiply") {
		multiply(num1, num2);
	}

	if (operator == "divide") {
		divide(num1, num2);
	}
};

//Grab button ID
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
	button.setAttribute("onclick", "buttonId(this.id)");
});

//Display function
let resultDisplay = document.getElementById("result");
let buttonId = (buttonid) => {
	resultDisplay.innerHTML += buttonid;
};

//clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
	resultDisplay.innerHTML = "";
});

//Get all operators
let operator = document.querySelectorAll(".operator");
operator.forEach((button) => {
	button.addEventListener("click", () => {
		console.log("operator clicked");
	});
});

//Call the math functions with the values
let compileContent = () => {
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
	let num1;
	let num2;
	let operator;
};
