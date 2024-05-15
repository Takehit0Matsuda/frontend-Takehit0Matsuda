console.log("Hello World!");

//one line comment

/*
block comment
*/

console.log(3);

console.log(5+2);

console.log(5-3);

console.log(5%2); //modulo

console.log("Konnichi"+" World!");

//define variables
let name = "John Smith";
console.log(name);

let age = 25;
console.log("Birth year is",2023-age);
console.log(2023-age, "is his birth year");

let length = 5;
console.log(length);
console.log(length*length*3);

//when you re-assign value to defined varaible
//just assign value without let
length = 10;
console.log(length);
console.log(length*length*3);

//Template Literal
//when you concatinate string and (variable / constant),
//1. Enclose the entire sentence in back quotation marks (`).
//2. Notate the part you want to assign to ${variable/constant name}.
let age2 = 28;
const name2 = "Take";
console.log(`My name is ${name2} and I'm ${age2} years old.`);

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0){
        console.log(number + " multiples of 3");
    } else {
        console.log(number);
    }
}

const item = {name : "sword", price : 300};
console.log(item.name);

const characters = [
    {name: "doggo", age: 14},
    {name: "catto", age: 100},
    {name: "birdy", age: 5},
    {name: "Take"}
    
    
];

for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}.`);

    if (character.age === undefined){
        console.log("My age is secret.");
    } else {
        console.log(`I'm ${character.age} years old`);
    }
}


const cafe = {
    name: "Cafe Progate",
    businessHours: { 
        opening: "10:00(AM)",
        closing: "8:00(PM)"
    },
    menus: ["coffee", "milk", "chocolate cake"]
    
};

console.log(`name: ${cafe.name}`);
console.log(`hours:${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Recommended menu");

for (let i = 0; i < cafe.menus.length; i++){
console.log(cafe.menus[i]);
}