const series = ["Jigoku Shoujo", "Psycho Pass", "Code Geass", "Yu Yu Hakusho", "Parasyte"];

series[4] = "Kiseijuu";

document.getElementById("S1").innerHTML = series[0];
document.getElementById("S2").innerHTML = series[1];
document.getElementById("S3").innerHTML = series[2];
document.getElementById("S4").innerHTML = series[3];
document.getElementById("S5").innerHTML = series[4];

document.getElementById("length").innerHTML = series.push();
