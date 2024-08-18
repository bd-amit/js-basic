"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

let name = "Amit"
let age = 30
let isLoggedIn = true
let state;

// number
// bigint
// string
// boolean
// null => standalone value
// undefined => 
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


//  Primitive -> Call by value -> Stored in Stack
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedOut = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive) -> call by reference -> Stored in heap
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Amit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);