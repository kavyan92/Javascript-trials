"use strict";


// 1. printIndices
function printIndices(items) {

  for (let i in items){
    console.log(i, items[i]);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const idx in items) {
      if (idx % 2 === 0)
          result.push(items[idx]);
  }
  return result;
}
  

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
