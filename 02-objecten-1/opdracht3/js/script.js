let number = Math.random();

document.getElementById("span1").innerHTML = number;
document.getElementById("span2").innerHTML = number * 9 + 1;
document.getElementById("span3").innerHTML = Math.ceil(number * 255);
document.getElementById("span4").innerHTML = Math.ceil(number * 100 + 100) / 2;
