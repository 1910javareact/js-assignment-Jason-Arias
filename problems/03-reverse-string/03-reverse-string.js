/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let length = someStr.length;
    

    if(length <= 0){
        return blank = 'Empty string, there is nothing to reverse';
    }
    
    let newStr = '';
     //iterate though the string in reverse, passing from the last char to the first char of the new string
    for(let i = length; i > -1; i--){
        newStr += someStr.charAt(i-1);
    }
    return newStr;
}
console.log(reverseStr('Goodnight World'));
console.log(reverseStr(''));
console.log(reverseStr('This is SPARTA Remix'));
console.log(reverseStr('1'));
console.log(reverseStr('abracadabra'));
