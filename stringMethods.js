/* Yaay! Let's play with Strings */

/* uppercase a word */
let sentence = "hello"
sentence = sentence.toUpperCase()
console.log(sentence)

/* capitalize a first and last name */

let fullName = "saivon schenck"

function firstAndLastNameCapped(fullName){
  let firstAndLast = fullName.split(' ')
  
  let firstName = firstAndLast[0][0].toUpperCase() + firstAndLast[0].substring(1)
  let lastName = firstAndLast[1][0].toUpperCase() +  firstAndLast[1]. substring(1)
//   
return `${firstName} ${lastName}`
}

console.log(firstAndLastNameCapped(fullName))

let password ="FiftHynintH"
function passwordProtection(password) {
    return password.toLowerCase();
}

console.log(passwordProtection(password))