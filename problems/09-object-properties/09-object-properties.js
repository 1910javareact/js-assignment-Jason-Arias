/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

console.log('\n\n');
for (let key in someObj) {
   
   //checks to see if there is an object inside our given object. 
    if(typeof(someObj[key]) === 'object'){
      console.log(`${key} = `);
      console.log(someObj[key] );
    }else{
      console.log(`${key} = ${someObj[key]}`);
    }  
  }
}
let card = {
    name: 'Stream',
    type: 'Water',
    game: 'Pokemon'
};

let person = {
    name: 'Mary',
    hairColor: 'Black',
    motivated: false,
    age: 25,
    weight: undefined

};

let car = {
    name: 'Christine',
    color: 'Red',
    engine: {
        type: 'V6',
        HP : 100
    }
};

console.log(objectProperties(card));
console.log(objectProperties(person));
console.log(objectProperties(car));