// Variable


const accountId = 1453
let accountEmail = "rahul@gmail.com"
var accountPassword = "241678"
accountCity = "kalaiya"
let accountState;   // Undefind 



// accountId = 2  // not allowed

accountEmail = "pandit@gmai.com"
accountPassword = "2re6736e8"
accountCity = "ktm"   // prefer to not use 
console.log(accountId);  

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])