const dog = {
    name : "Ivy", 
    age : 4, 
    breed : "Pumi", 
    fur : "black"
};

dog.age = dog.age + 1;
dog.houseTrained = true;

if(dog.houseTrained == false){
    console.log(`Dogname is ${dog.name}, age ${dog.age}, breed ${dog.breed} with ${dog.fur} fur, me bad dog`);
}else{
    console.log(`Dogname is ${dog.name}, age ${dog.age}, breed ${dog.breed} with ${dog.fur} fur, me good dog`);
}

