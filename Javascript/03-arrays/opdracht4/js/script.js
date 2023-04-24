const biggestCitiesBenelux = [
	"Brussel",
	"Amsterdam",
	"Rotterdam",
	"Den Haag",
	"Antwerpen",
	"Utrecht",
	"Gent",
	"Eindhoven",
	"Groningen",
	"Tilburg",
];

const myPets = ["Hond", "Kat", "Konijn", ["Gladhaar cavia", "Borstel cavia", "Rex cavia", "Coronet cavia"]];

[cityA, cityB, rest] = biggestCitiesBenelux;

document.getElementById("melding1").innerHTML = `De grootste steden in de Benelux zijn ${cityA} en ${cityB}.`;

[petA, petB, petC, [petD, petE, petF, petG]] = myPets;

document.getElementById(
	"melding2"
).innerHTML = `Mijn favoriete huisdieren zijn de ${petA}, ${petB}, ${petC}, ${petD}, ${petE}, ${petF}, ${petG}`;
