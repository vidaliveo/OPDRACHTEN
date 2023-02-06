const word = prompt("Word", "word");
const letter = prompt("Letter of your choice");

// document.querySelector("p").innerHTML = word;
document.getElementById("h1").innerHTML = word;
document.getElementById("li1").innerHTML = word.length;
document.getElementById("li2").innerHTML = word.toUpperCase();
document.getElementById("li3").innerHTML = word.toLowerCase();
document.getElementById("li4").innerHTML = word.indexOf(letter) + 1;