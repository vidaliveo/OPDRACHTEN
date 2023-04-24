var planes = ["Ixalan", "Tarkir", "Ravnica", "Dominaria", "Theros", "Amonkhet", "Mirrodin", "Innistrad"];

planes.unshift("Kaladesh");

planes.splice(4, 1);

planes.splice(3, 0, "Lorwyn");

planes.sort();

planes.reverse();

// document.getElementById("list").innerHTML = "<li>" + planes.join("</li><li>") + "</li>";

let list = "";
planes.forEach((plane) => {
	list += `<li>${plane}</li>`;
});

document.getElementById("list").innerHTML = list;
