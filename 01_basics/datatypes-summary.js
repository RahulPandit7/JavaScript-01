//  Primitive data types 

// 7 types 

// String, Number, Boolean, null, undefined, Symbol, BigInt

const Scroe = 100
const numScroe = 100.32

const isLoggedIn = false 
const outSideTemp = null 
let userEmail;
const id = Symbol("123")

const BigIntNum = 6468441875415741n


// Reference (Non Primitive)

// Array, objects, Functions

const heros = ["rahul", "aarti", "pandit"]
console.log(typeof heros);

let myobj = {
    name: "Rahul",
    age: 22,
}

console.log(typeof myobj);


const myFunction = function () {
    console.log("hello");
}

console.log(typeof myFunction);




//   Memory 


// Stack (Primitive), Heap (Non-Primitive)

// Stack 
let myusername = "Rahul@123"

let anotherusername = "pandit@456"

anotherusername = "aarti@123"

console.log(myusername); // Rahul@123
console.log(anotherusername);  // aarti@123


// Heap 

let userOne = {
    userName: "Rahul",
    email: "rahul@gmail.com",
    pass: "832964749"

}

let userTwo = userOne

userTwo.userName = "Aatri"

console.log(userOne.userName);  // Aarti
console.log(userTwo.userName); // Aarti

