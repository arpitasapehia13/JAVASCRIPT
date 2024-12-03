
const accountID = 145567
let accountEmail = "arpita@gmail.com"
var accountPassword = "12345"
accountCity = "Punjab"

// accountID = 2 -> this is not allowed
accountEmail = "github@gmail.com"
accountPassword = "23"
accountCity = "Hyd" //this is not recommended practice

console.log(accountID);
console.table([accountEmail,accountID,accountPassword,accountCity])




/*
***************************************************************THEORY:**************************************************************************

const -> can't be changed 
let -> can be changed
var -> can be changed but this have issue with BLOCK SCOPE & FUNCTIONAL SCOPE. PREFER NOT TO USE 'VAR'

*/
