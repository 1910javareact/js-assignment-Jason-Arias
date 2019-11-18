/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
let arr = [0, 1]

if (n <= 0){
return NaN
} 

for(let i = 2; i <= n; i++) {
    arr[i] = arr[(i - 1)] + arr[(i -2)]
}
return arr[n-1]
}
let a = 5;
let b = 7;
let c = 9;
let d = 12;
console.log(` The number ${a} in the fibonacci sequence is: ${fib(a)}`);
console.log(` The number ${b} in the fibonacci sequence is: ${fib(b)}`);
console.log(` The number ${c} in the fibonacci sequence is: ${fib(c)}`);
console.log(` The number ${d} in the fibonacci sequence is: ${fib(d)}`);

