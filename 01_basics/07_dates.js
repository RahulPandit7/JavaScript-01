// Dates 

let myDate = new Date()

console.log(typeof myDate);  // object
console.log(myDate);  // 2024-07-08T06:08:30.881Z
console.log(myDate.toString());  //Mon Jul 08 2024 06:09:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jul 08 2024
console.log(myDate.toLocaleString()); // 7/8/2024, 6:10:58 AM
console.log(myDate.toISOString());  // 2024-07-08T06:12:17.811Z


// let myCreateDate = new Date(2024, 0, 23) // 1/23/2024
// let myCreateDate = new Date(2024, 0, 23, 5, 3)  // 1/23/2024, 5:03:00 AM
// let myCreateDate = new Date("2024-01-14")  // 1/14/2024, 12:00:00 AM
let myCreateDate = new Date("01-14-2024")  // 1/14/2024, 12:00:00 AM
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);  // 1720420273444   millisecond
console.log(myCreateDate.getTime()); // 1705190400000  millisecond
console.log(Math.floor(Date.now()/1000));  // 1720420387  convert int second 


let newDate = new Date()
console.log(newDate.getMonth()); // 6 Month
console.log(newDate.getDay());  // 1 Day 
console.log(newDate.getFullYear()); // 2024 year