// Number and Maths 

// Number 
const balance =  new Number(100)
console.log(balance);


// Convert into String value
console.log(balance.toString().length);  // 3

// Logs the balance variable rounded to two decimal places using the toFixed method.
console.log(balance.toFixed(2));  // 100.00


const otherNumber = 123.9343
console.log(otherNumber.toPrecision(4)); // 123.9


const zero = 1000000000
console.log(zero.toLocaleString());  // 1,000,000,000 default 
console.log(zero.toLocaleString('en-IN'));  // 1,00,00,00,000 for india 




// Maths 

console.log(Math);  // bject [math] {}
console.log(Math.abs(-4));  // 4 change nagative topositive sign 
console.log(Math.round(4.6)); // round up the value if below the 4.4 then output 4 if more the 4.5 then output 5 
console.log(Math.ceil(8.2));  // if value is more then 8 then output always +1 value 
console.log(Math.floor(4.9)); // if value is below the 5 then output always 4 
console.log(Math.min(45,78,2,3));  // 2
console.log(Math.max(45,78,2,3));  // 78



// VVI

console.log(Math.random()); // display a random number betwwen 0 and 1 
console.log((Math.random()*10) +1);  // display 1+ value but min value is 1 
console.log(Math.floor(Math.random()*10) +1);  // round up the value 

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min +1)) + min);  // min value is 10 