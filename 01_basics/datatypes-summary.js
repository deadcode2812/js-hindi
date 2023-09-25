// Primitive 

// 7 types : -> String, Number, Boolean, null, undefined, Bigint, symbol

let id = Symbol('123');
let anotherId = Symbol('123');

// here both id and anotherId are different

console.log(id === anotherId); // false;


let bigNumber = 3456785n;

// Non-Primitve (Reference)

// Array, Objects, Function


const heros = ["shaktiman", "nagraj", "doga"];

const myObject = {
    name : "abhinay",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
}

