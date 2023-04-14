let name = prompt();
let age = prompt();
let city = prompt();

document.getElementById("article").innerHTML = `<article>
<p>${name}</p>
<p>${age}</p>
<p>${city}</p>
</article>`;
