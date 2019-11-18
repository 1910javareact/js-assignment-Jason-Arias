/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let newArr = []
  for (let i = 0; i < someArr.length; i++) {
      if (i == index) {
          newArr += someArr[i]
      }
  }
  return newArr
}

let a = [20, 30, 13, 350, 24000]
let b = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
console.log();
console.log(`${a} before, \"${spliceElement(a,3)}\" is the index of 3, has been removed from the array\n`);
console.log(`${b} before, \"${spliceElement(b,2)}\" is the index of 2, has been removed from the array\n`);

