/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

 // An Object literal

let thingOne = {
    name: 'Thing One',
    age: 5
};

/**
 * constructor function
 * @param {string} name 
 * @param {number} age 
 */
function thingTwo(name, age) {
    this.name = name;
    this.age = age;
}


 //An es6 Class
class ThingThree {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};

let b = thingTwo('Thing Two', 6);
let c = new ThingThree('Thing Three', 7);

console.log('\nObject Literal: ' + thingOne + '\n' );
console.log('Constructor Function: ' + thingTwo + '\n');
console.log('ES6 Class: ' + ThingThree + '\n');