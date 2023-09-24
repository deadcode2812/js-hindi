const accountId = 12345
let accountEmail = "abhinay@gmail.com"
var accountPassword = "123678"
accountCity = "Sultanpur"

accountEmail = "rajput@gmail.com"
accountPassword = "12789234"
accountCity = "Noorpur"   // Bad practice to use variables like this
let accountState;  // Gives undefined value

/* 
Prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])
