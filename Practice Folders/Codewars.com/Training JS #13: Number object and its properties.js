
function whatNumberIsIt (n) {
let possibleResults = ["Input number is Number.MAX_VALUE",
"Input number is Number.MIN_VALUE",
"Input number is Number.NaN",
"Input number is Number.NEGATIVE_INFINITY",
"Input number is Number.POSITIVE_INFINITY"]

let grandElse = `Input number is ${n}`

if(isNaN(n)) return "Input number is Number.NaN"


return n == Number.MAX_VALUE ? possibleResults[0]
        : n == Number.MIN_VALUE ? possibleResults[1]
        : n == Number.NEGATIVE_INFINITY ? possibleResults[3]
        : n == Number.POSITIVE_INFINITY ? possibleResults[4]
        : grandElse;
        

// switch(n) {
//     case Number.MAX_VALUE:
//          return possibleResults[0];
//     break;
//     case Number.MIN_VALUE:
//         return possibleResults[1];
//     case Number.NEGATIVE_INFINITY:
//         return possibleResults[3];
//     case Number.POSITIVE_INFINITY :
//         return possibleResults[4];
//     default :
//     return grandElse;
// }

 }



let test = whatNumberIsIt(Number.POSITIVE_INFINITY)
console.log(test)

/*
Create a array of the possible results,
store the varing else clause in a variable,
create condition statments judge the n input, 
Store all the number values into their own variable. 
use ternary operaters instead of if statements.

Also create a solution using the Switch Statment.
Solve this twice.
*/