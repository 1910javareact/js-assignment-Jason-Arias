/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {

   //Decrement the current number to be passed in the next recursion
  let lowerNum = sumNum -1;

   //checking if the number passed is the last one of the factoral
  if(sumNum === 1){
      return 1;
  }

   //returns the current number times the return value of the next factorial callback sum
  return sumNum * factorial(lowerNum);
}
let a = 9;
let b = 20;
let c = 1;
let d = 6;
let e = 4;

console.log(`The factorial total for the number ${a} is: ${factorial(a)}`);
console.log(`The factorial total for the number ${b} is: ${factorial(b)}`);
console.log(`The factorial total for the number ${c} is: ${factorial(c)}`);
console.log(`The factorial total for the number ${d} is: ${factorial(d)}`);
console.log(`The factorial total for the number ${e} is: ${factorial(e)}`);

