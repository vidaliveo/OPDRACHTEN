const hondachtigen = ["Hond", "Wolf", "Vos", "Jakhals", "Olifant"];
const katachtigen = ["Kat", "Leeuw", "Tijger", "Lynx", "Poema"];

hondachtigen.pop();
hondachtigen.push("Coyote");

katachtigen.push("Luipaard", "Jaguar");

document.getElementById("dogs").innerHTML = hondachtigen.join(" - ");
document.getElementById("cats").innerHTML = katachtigen.join(" - ");

const zoogdieren = hondachtigen.concat(katachtigen);

const ZS = zoogdieren.sort();

document.getElementById("mammals").innerHTML = ZS.join(" - ");

const add = prompt("Enter new animal");

const newArray = ZS.concat(add);

const ZSN = newArray.sort();

alert(ZSN.join("\n"));
