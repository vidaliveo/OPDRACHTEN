const randomNumber = Math.floor(Math.random(0, 9) * 10 + 1);

if (randomNumber < 5) {
	alert(randomNumber + " is lager dan 5");
} else if (randomNumber > 5) {
	alert(randomNumber + " is hoger dan 5");
} else {
	alert(randomNumber + " is 5");
}
