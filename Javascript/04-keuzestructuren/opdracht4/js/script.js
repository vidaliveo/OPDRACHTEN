var title = "";
const text = "";
const language = prompt("Choose a language: nl, en, de, es", "nl, en, de, es");
if (language == null || language == "") {
	title = "Please enter a language";
} else if (language == "nl") {
	title = "Welkom";
	text = "Je hebt Nederlands gekozen.";
} else if (language == "en") {
	title = "Welcome";
	text = "you have chosen English.";
} else if (language == "de") {
	title = "Willkommen";
	text = "Sie haben Deutsch gewählt.";
} else if (language == "es") {
	title = "Bienvenida/Bienvenido";
	text = "Has elegido Español.";
} else {
	title = "Invalid language";
}

document.getElementById("title").innerHTML = title;
document.getElementById("text").innerHTML = text;
