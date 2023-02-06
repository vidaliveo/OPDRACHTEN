const numbers = prompt("4 numbers , 4 numbers", "0000,0000");
const letter = prompt("Letter of your choice");

// document.querySelector("p").innerHTML = word;
document.getElementById("h1").innerHTML = Number(numbers);
document.getElementById("li1").innerHTML = word.length;
document.getElementById("li2").innerHTML = word.toUpperCase();
document.getElementById("li3").innerHTML = word.toLowerCase();
document.getElementById("li4").innerHTML = word.indexOf(letter) + 1;