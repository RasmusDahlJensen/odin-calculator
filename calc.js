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
		console.log(subtract);
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
	TODO: //Apply the first display value to the num2 when i press an operator
    //and save the operator in the value as well.
    //When i click the = sign put the second value in num1 and call the operate function with the values
	let num1;
	let num2;
	let operator;
};
