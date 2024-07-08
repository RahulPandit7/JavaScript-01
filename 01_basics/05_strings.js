//  Strings 

const name = "Rahul Pandit "
const luckyNum = 7


// old syntax
// console.log(name + luckyNum); 

// New syntax 
console.log(`Hello my name is ${name} and my Lucky number is ${luckyNum}`);


// next

const gameName = new String('Rahul')

console.log(gameName); // Rahul
console.log(gameName[0]); // R
console.log(gameName.__proto__);  // {}
console.log(gameName.length);  // 5
console.log(gameName.toUpperCase());  // RAHUL
console.log(gameName.charAt(2));  // h
console.log(gameName.indexOf("h"));  // 2


const testString = new String("Aarti-RP")


// sub-String
const newString = testString.substring(0, 3)
console.log(newString); // Aar


// slice
const anotherString = testString.slice(-8, 4)
console.log(anotherString); // Aart

// trim Remve Blank Spaces 
const newStrone = "       Rahul     "
console.log(newStrone);  //       Rahul   
console.log(newStrone.trim()); // Rahul Remove Black Spaces both sdie 

// Replace 
const url = "https://www.rahulpandit07.com.%20np/"
console.log(url.replace("%20", ''));  // https://www.rahulpandit07.com.np/

// Find words 
console.log(url.includes('rahul'));  // true
console.log(url.includes('aarti'));  // false 

// split
console.log(testString.split('-'));  // [ 'Aarti', 'RP' ]