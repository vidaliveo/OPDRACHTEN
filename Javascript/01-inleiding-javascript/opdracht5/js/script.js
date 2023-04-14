let output = prompt() + "<br>";
output += prompt() + "<br>";
output += prompt();

let x = 3;
x += x * 3;
x += x * 3;
x += x * 3;
x += x * 3;
x += x * 3;

document.getElementById("p").innerHTML = output;

document.getElementById("span").innerHTML = x;
