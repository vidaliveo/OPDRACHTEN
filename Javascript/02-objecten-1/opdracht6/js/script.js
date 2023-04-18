const numbers = prompt("4 numbers . 4 numbers", "0000.0000");
const number = Number(numbers);
const multiNumber = number * 100;
const diviNumber = number / 100;

document.getElementById("number").innerHTML = number;
document.getElementById("li1").innerHTML = number.toFixed(3);
document.getElementById("li2").innerHTML = number.toFixed(1);
document.getElementById("li3").innerHTML = multiNumber.toFixed(2);
document.getElementById("li4").innerHTML = diviNumber.toFixed(2);
