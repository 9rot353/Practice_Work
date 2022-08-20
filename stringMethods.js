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


//protect the interal quote with \
let sentenceWithQuote = "But the other day you said \"we are going to the zoo\"" ;
console.log(sentenceWithQuote);

//check to see how long a string is
let dictionary = "dictionary"
console.log(dictionary.length)

//concatination

let adjective = "fast"
let verb = "running"

console.log("the dogs were " + verb + " " + adjective)

let statment = verb.concat(" ", adjective)

console.log(statment)

//find the first letter in a string
console.log(dictionary[0])
//uppercase the first letter of a word
console.log(dictionary[0].toUpperCase() + dictionary.substring(1))
//finding the last character in a string
console.log(dictionary[dictionary.length -1])
//find the second to last character in the string
console.log(dictionary[dictionary.length -2])