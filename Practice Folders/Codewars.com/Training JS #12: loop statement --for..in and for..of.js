function giveMeFive(obj){
    //coding here
    let result = []
    
    for (let key in obj){
      if (key.length == 5){
        result.push(key)
       
      }  
  }
  for (let key in obj){
    if (obj[key].length == 5) {
        result.push(obj[key])
       
    }
}
  return result
}
  let testSet = {Ihave:"enough", money:"to",buy:"a",car:"model"}

  console.log(giveMeFive(testSet));


  /*
  Create an results array that you can push to and return at the end of the function
  create two seperate for in loops. 
  one loop to find the keys with a length of longer than 5
  one loop to find the values with a length of longer than 5
  return the results.
  */

  //codewars.com :https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript


  