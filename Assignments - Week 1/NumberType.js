//Create a JavaScript function that determines if a number is 
// positive, negative, or zero and returns a corresponding 
// string indicating the type.

//let number=8

function checknumber(number){
if (number==0) {
    return "Input number " + number + " is determined as zero"
}
else if (number>0) {
    return "Input number "+ number + " is determined as a positive number"
}
return "Input number "+ number + " is determined as negative number"
}

console.log(checknumber(-4))
console.log(checknumber(10))
console.log(checknumber(0))