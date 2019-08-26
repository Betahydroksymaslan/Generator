function randomize() {
	var number1 = parseInt(document.getElementById("firstInput").value);
	var number2 = parseInt(document.getElementById("secondInput").value);
	var randomNumber = Math.floor(Math.random()*(number1 - number2 +1)) +number2;
	
	if (number1 === " ") {
		document.getElementById("resulttxt").innerHTML= "Please type a real number";
	} else if (number1 > number2) {
		document.getElementById("resulttxt").innerHTML= "Number 1 must be greater than number 2";
	} else {
		document.getElementById("resultation").innerHTML= randomNumber;
	}
	
}

/*
function randomize() {
	var number1 = parseInt(document.getElementById("firstInput").value);
	var number2 = parseInt(document.getElementById("secondInput").value);
	var randomNumber = Math.floor(Math.random()*(number1 - number2 +1)) +number2;
	
	if (number1 === " ") {
		document.getElementById("resulttxt").innerHTML= "Please type a real number";
	} else if (number1 > number2) {
		document.getElementById("resulttxt").innerHTML= "Number 1 must be greater than number 2";
	} else {
		document.getElementById("resultation").innerHTML= randomNumber;
	}
	*/