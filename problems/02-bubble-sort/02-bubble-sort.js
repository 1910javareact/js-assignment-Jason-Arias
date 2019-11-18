/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  if(numArray.length <= 0){
    return null;

  }
  let done = false;//boolean to check if a swap/sort was done in a loop. Set to false to start the loop
  let count = 0;
  while(!done) {
    done = true;//boolean set to true as no swaps/sorts have been done in this loop
    count++;
    for(let i = 0; i < numArray.length - count; i++){
        if(numArray[i] > numArray[i+1]){//comparing the current index to next index 
            let temp = numArray[i+1];
            numArray[i+1] = numArray[i];
            numArray[i] = temp;
            done = false; //a swap/sort was done, array must be checked again to see if it is sorted
        }

    }

  }

  return numArray;
}
let arr1 = [15,0,500,24,42,0,69,0];
let arr2 = [];

console.log(`Sorting: ${arr1} ====> ${bubbleSort(arr1)}`);
console.log(`Sorting: ${arr2} ====> ${bubbleSort(arr2)}`);
