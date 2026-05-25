//Create a JavaScript function that accepts a string, 
// reverses it, and checks if the reversed string is a palindrome, then 
// test your function with various strings and print the results.

let tstString = "madam"
console.log("Input String:"+ tstString)
let newstr = tstString.split("")
//console.log(newstr)
let reversed = newstr.reverse().join("");
console.log("Reversed String:" + reversed)

function strCheck(reversed){
    if (reversed == tstString) {
        //console.log("it's a palindrome")
        return true        
    }
    else
        //console.log("it's not a palindrome")
        return false
}
strCheck(reversed)

console.log(strCheck(reversed))