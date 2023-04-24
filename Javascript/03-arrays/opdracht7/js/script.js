const fruits = ["🍎", "🍐", "🍓", "🍌", "🍒", "🍋", "🍉", "🍍", "🍑", "🍇"];

delete fruits[3];
delete fruits[6];
delete fruits[7];

console.log(fruits);

document.getElementById("fruits1").innerHTML = fruits.join("<br>");

let fruitDense = [];
for (var i = 0; i < fruits.length; i++) if (fruits[i] != null) fruitDense.push(fruits[i]);

document.getElementById("fruits2").innerHTML = fruitDense.join("<br>");
