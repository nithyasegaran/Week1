//Write a JavaScript function named `isOddOrEven` that takes an 
// integer as input and returns `Odd` if the number is odd and 
// `"Even"` if the number is even.

//let number = "990"

function isOddOrEven(number){

    if (number %2 !==0) {
        return number + " is odd"     
    }
    else
        return number + " is even"   

}

//calling the function
console.log(isOddOrEven(100))
console.log(isOddOrEven(100+1))
console.log(isOddOrEven(100-1000))
console.log(isOddOrEven(100/10))
console.log(isOddOrEven(13*73))




