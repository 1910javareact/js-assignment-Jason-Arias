/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {

     //manipulating the given number to get a comparable value. Flooring any decimals gives us whole numbers to compare. 
    let test = 2 * Math.floor(someNum/2);

     //if the double of half the original number (rounded down if a decimal) does not equal the original, then it is an odd number
    if(someNum !== test){
        return false;
    }else{
        return true;
    }
}

let a = 29;
let b = 14;
let c = -1023;
let d = 0;

console.log(`Is the Number(${a}) even? -${isEven(a)}`);
console.log(`Is the Number(${b}) even? -${isEven(b)}`);
console.log(`Is the Number(${c}) even? -${isEven(c)}`);
console.log(`Is the Number(${d}) even? -${isEven(d)}`);
