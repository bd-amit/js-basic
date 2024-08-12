const accountId = 14455 // not allowed once assigned you can't change

let accountEmail = "amit@google.com" // ; is not mandatory

var accountPassword = "12345"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Jaipur"

let accountState;

// accountId = 113244

accountEmail = "ag@goole.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])