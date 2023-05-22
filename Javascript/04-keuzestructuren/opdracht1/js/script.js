if (confirm("Deze website maakt gebruik van cookies. Klik op OK om hiermee akkoord te gaan.")) {
	var answer = "U gaat akoord met cookies.";
	document.getElementById("answer").style.color = "green";
} else {
	var answer = "U gaat niet akoord met cookies.";
	document.getElementById("answer").style.color = "red";
}

document.getElementById("answer").innerHTML = answer;
