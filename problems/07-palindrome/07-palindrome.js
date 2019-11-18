/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    let length = someStr.length;

     // convert the given string to all lowercase
    someStr = someStr.toLowerCase();

     //iterates though the first half of the string, comparing it to the end of the string (moving towards the middle)
     //if any letter does not match, returns false
    for(let i = 0; i < length /2; i++){
        if(someStr[i] !== someStr[length - 1 - i]){
            return false;
        }
    }
    return true;
}

let a = 'track';
let b = 'real';
let c = 'Fruits are good doog era stiurf';

console.log(`Is "${a}" a palindrome? - ${isPalindrome(a)}`);
console.log(`Is "${b}" a palindrome? - ${isPalindrome(b)}`);
console.log(`Is "${c}" a palindrome? - ${isPalindrome(c)}`);
