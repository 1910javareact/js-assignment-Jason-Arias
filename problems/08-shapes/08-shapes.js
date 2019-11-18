/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
const shape = {
  SQUARE: 'Square',
  TRIANGLE: 'Triangle',
  DIAMOND: 'Diamond'
}
function printShape(shape, height, character) {
  let p = character;
  let line = '';
  console.log();

  switch (shape) {
    case 'Square':
      console.log('******************');
      console.log('******SQUARE******');
      console.log('******************\n');

      for (let i = 0; i < height; i++) {
        line = '';//reset the string 
        for (let j = 0; j < height; j++) {
          line += p;
        }
        console.log(line);//printing the current build of the line
      }
      console.log();
      break;
    case 'Triangle':
        console.log('*******************');
        console.log('*****TRIANGLE******');
        console.log('*******************\n');
      
      for (i = 0; i <= height; i++) {
        
        
        line = '';//reset the string
        for (j = 0; j < i; j++) {
          line += p;
        }
        console.log(line);//printing the current build of the line
      }
      console.log();
      break;
    case 'Diamond':
       //checks to see if the height is the required odd number
    if(height % 2 === 0){
      console.error('Height must be a odd number.');
      return '';//returns an empty line if input given is incorrect
    }
        console.log('******************');
        console.log('******Diamond*****');
        console.log('******************\n');
      let space = Math.floor(height/2);//variable to hold the number of empty chars to be added into the string before the specified character is added
      let spacer = 1; //iterable to add x spaces, here so that it can be reversed (turned to a negative)
      let swapper = 2; //iterable to be added to chars, increasing/decrease the number of characters added to a line
      let chars = 1;//iterable to add x number of characters to a string.
      //build up the first half of the diamond
      for (let i = 0; i < height; i++) {
        line = '';//resetting the string for the next line
        for (let j = 0; j < space; j++) {
      
            line += ' ';
        }
        for(let k = 0; k < chars; k++){
          line += p;
        }
         //if the # of characters to be added to the last line is equal to the passed in height of the diamond, 
         //the sign of the swapper and the spacer are then changed
        if(chars === height){
          swapper *= -1;
          spacer *= -1;
        }
        space -= spacer;//changes the number of spaces to be added to next line
        chars += swapper;//changes the number of characters to be added to next line
        console.log(line);//printcurrent string
      }
      break;
      default: //If none of the three shape names were printed, display the follwoing message
        console.log(`An invalid shape name was passed into this function. Please try again`)
      break;
  }
}

printShape(shape.SQUARE,5,'@');
printShape(shape.TRIANGLE,7,'*');
 printShape(shape.DIAMOND,9, '#');
 printShape(shape.DIAMOND,10, '=');