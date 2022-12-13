function grabDoll (dolls) {
    let bag = []

    for (let i = 0; i < dolls.length; i++) {
        let doll = dolls[i]

        if (doll == "Hello Kitty" || doll == "Barbie doll") {
            bag.push(doll)
        }else if (doll != "Hello Kitty" || doll != "Barbie doll") {
            continue
        }

        if (bag.length >= 3){
            break
        }
    }
return bag 
}

let set = ["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]
console.log(grabDoll(set))

/* Create for loop
if arr[i] = "Hello Kitty" or "Barbie doll" add it to the bag.
else arr != "Hello Kitty" or Barbie doll continue.
if bag.length > 3 break.
*/

/*CodeWars :https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript