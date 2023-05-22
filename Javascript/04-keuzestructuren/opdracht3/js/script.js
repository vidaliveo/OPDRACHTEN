const date = new Date();
let dayOfTheWeek = date.getDay();
let dayOfTheMonth = date.getDate();
let month = date.getMonth() + 1;

if (dayOfTheWeek == 5 && dayOfTheMonth == 13) {
	alert("It's Friday 13th");
} else {
	alert("It's NOT Friday 13th");
}

if (dayOfTheWeek == 0 || dayOfTheWeek == 6) {
	alert("It's weekend");
} else {
	alert("It's NOT weekend");
}

if (dayOfTheMonth == 19 || month == 3) {
	alert("It's my birthday");
} else {
	alert("It's NOT my birthday");
}

if (dayOfTheWeek != 0 || dayOfTheWeek != 1 || dayOfTheWeek != 3 || dayOfTheWeek != 6) {
	alert("Work today");
} else {
	alert("NO work today");
}

document.getElementById("WD").innerHTML = "The " + dayOfTheWeek + "' day of the week";
document.getElementById("MD").innerHTML = "The " + dayOfTheMonth + "' day of the month";
document.getElementById("M").innerHTML = "The " + month + "' month of the year";
