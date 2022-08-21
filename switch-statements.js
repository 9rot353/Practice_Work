//can a case be a conditional?

function message(percentage) {


let printMessage = ""
switch(percentage) {
    case 50:
        printMessage = "half way there bruv.";
    break;
    case 100:
        printMessage = "You are on you way out mate!"
    break;
    default:
        printMessage = "keep fighting on"
}

console.log(printMessage)

}

message(100)