
let num = 10;

let arrayOfNum = [1,2,3,4,5,6,7,8,9,10]
console.log("For loop results: ")
for (let index = 0; index < arrayOfNum.length; index++) {
    console.log(arrayOfNum[index])
}
  
/*
let index = 0 is the initial expression
index< array.length is the condition
index++ is the update
as long as the middle condition is true the code with the code block {} will run another time

*/

console.log("Do While loop results: ")

do { 
    num -= 1 
    console.log(num)
} while (num >= 10);

/*Simular to the while loop, however, because of the how the code is structured the instructions will always run at least once
even with the conditon set is false.*/ 

let secondNum = 10
console.log("Results of While loop: ")
while (secondNum >0) {
secondNum -=1 
console.log(secondNum)
}
/* A do while loop is great for when you want to loop, but don't know how many times you will need to loop */
