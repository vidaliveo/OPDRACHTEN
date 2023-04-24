const products = [["Sleutelhanger", "Reddingsvest"], ["Bandenpomp", ["Ruitenwisservloeistof", "Olie"]], ["Skittles"]];

products[1][1].splice(1, 0, "koelvloeistof");

console.log(products);

const productsFlat = products.flat(2);

console.log(productsFlat);

const shoppingCart = productsFlat.slice(2, 3).concat(productsFlat.slice(4, 5)).concat(productsFlat.slice(6));

console.log(shoppingCart);

let list = "";
shoppingCart.forEach((item) => {
	list += `<li>${item.substring(0, 3).toUpperCase()}</li>`;
});

document.getElementById("shoppinglist").innerHTML = list;
