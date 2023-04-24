const producten = [
	["Melk", "0.89", 1],
	["Eieren", "1.29", 0],
	["Kaas", "1.69", 1],
	["Suiker", "1.00", 0],
];

producten[1][2] = 1;
producten[0][1] = "1.29";
producten[1][1] = "1.49";
producten[2][1] = "2.79";
producten[3][1] = "29.99";

document.getElementById("N1").innerHTML = producten[0][0];
document.getElementById("P1").innerHTML = producten[0][1];
document.getElementById("B1").innerHTML = producten[0][2];
document.getElementById("N2").innerHTML = producten[1][0];
document.getElementById("P2").innerHTML = producten[1][1];
document.getElementById("B2").innerHTML = producten[1][2];
document.getElementById("N3").innerHTML = producten[2][0];
document.getElementById("P3").innerHTML = producten[2][1];
document.getElementById("B3").innerHTML = producten[2][2];
document.getElementById("N4").innerHTML = producten[3][0];
document.getElementById("P4").innerHTML = producten[3][1];
document.getElementById("B4").innerHTML = producten[3][2];

let tablerow = `<tr>
                    <th>Naam</th>
                    <th>Prijs</th>
                    <th>Beschikbaar</th>
                </tr>`;
producten.forEach((product) => {
	tablerow += `<tr>
                    <td>${product[0]}</td>
                    <td>${product[1]}</td>
                    <td>${product[2]}</td>
                </tr>`;
});

document.getElementById("table").innerHTML = tablerow;
