const today = new Date();

document.querySelector("header").innerHTML =
	"<span>This page was requested on " +
	today.getDate() +
	"-" +
	today.getMonth() +
	1 +
	"-" +
	today.getFullYear() +
	"</span>";
"© CodeCrashers - " + today.getFullYear();
document.querySelector("section").innerHTML =
	"<p>It's " +
	today.getHours() +
	":" +
	today.getMinutes() +
	":" +
	today.getSeconds() +
	"</p>";
document.querySelector("footer").innerHTML =
	"© CodeCrashers - " + today.getFullYear();
