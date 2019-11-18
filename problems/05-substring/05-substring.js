/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    let newStr = '';


    /**
     * check the indexes passed to make sure they are not beyond the scope or functionality of the method
     * If an error is found, throw a console error and then leave the code.
     */
    if (startIndex >= endIndex) {
        console.error("Warning! The startIndex is larger than the endIndex.\n");
        return;
    } else if (startIndex <= 0) {
        console.error("Warning! The startIndex you passed is below the range of the start of the string.\n");
        return;
    } else if (endIndex > someStr.length) {
        console.error("Warning! The endIndex you passed is beyond the range of the string you gave me.\n");
        return;
    }

     //loop through both indexes given to populate the empty string with the substring requested
    for (let i = startIndex; i < endIndex - 1; i++) {
        newStr += someStr[i - 1];
    }
     //return the substring
    return newStr;
    
}

let str1 = 'goodbye';
let str2 = 'morning';
let str3 = 'back page';
let str4 = 'More than should be acceptable, but it can handle it.';
console.log(`This is your substring from string \"${str1}\" from index 1 upto index 3: "${substring(str1, 1, 3)}"`);
console.log(`This is your substring from string \"${str2}\" from index 3 upto index 6: "${substring(str2, 3, 6)}"`);
console.log(`This is your substring from string \"${str3}\" from index 3 upto index 0: "${substring(str3, 3, 0)}"`);
console.log(`This is your substring from string \"${str4}\" from index 3 upto index 9: "${substring(str4, -5, 50)}"`);
console.log(`This is your substring from string \"${str4}\" from index 3 upto index 9: "${substring(str4, 5, 500)}"`);
