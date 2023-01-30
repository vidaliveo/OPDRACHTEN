const dog = {
	name: "Ivy",
	age: 4,
	breed: "Pumi",
	fur: "black",
	family: {
		mother: "unknown mother",
		father: "unknown father",
	},
	sleep: function () {
		alert("dog sleeps");
	},
	eat: function () {
		alert("dog eats");
	},
	bark: function () {
		alert("dog barks");
	},
	givePaw: function () {
		alert("dog gives paw");
	},
};

dog.age = dog.age + 1;
dog.houseTrained = true;

if (dog.houseTrained == false) {
	console.log(
		`Dogname is ${dog.name}, age ${dog.age}, breed ${dog.breed} with ${dog.fur} fur, me bad dog...
        mother: ${dog.family.mother} and father: ${dog.family.father} `
	);
	dog.bark();
	dog.bark();
} else {
	console.log(
		`Dogname is ${dog.name}, age ${dog.age}, breed ${dog.breed} with ${dog.fur} fur, me good dog...
        mother: ${dog.family.mother} and father: ${dog.family.father} `
	);
	dog.eat();
	dog.sleep();
	dog.givePaw();
}
