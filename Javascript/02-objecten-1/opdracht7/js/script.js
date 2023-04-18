const dkc = "Donkey Kong Country";
const anthem = "God Save the Queen";
const lyrics1 = "I'm blue,";
const lyrics2 = "Da ba dee da ba di ";
const yoda = "you must have patience my young Padawan";
const yodaParts = yoda.split(" ");
const yodaArray = [
	yodaParts[3],
	yodaParts[0],
	yodaParts[1],
	yodaParts[2],
	yodaParts[4],
	yodaParts[5],
	yodaParts[6],
].join(" ");

document.getElementById("li1").innerHTML = dkc.padEnd(30, ".");
document.getElementById("li2").innerHTML = anthem.replace("Queen", "King");
document.getElementById("li3").innerHTML = lyrics1 + lyrics2.repeat(7);
document.getElementById("li4").innerHTML = yodaArray;
