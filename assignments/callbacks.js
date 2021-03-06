// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }
// getLength(items, function(theLength) {
//   console.log("getLength", theLength);
// });

// Arrow Attempt
const getLength = (arr, cb) => cb(arr.length);

getLength(items, length => {
  console.log("getLength", length);
});

// Multiple Line Arrow Example
// const getLength = (arr, cb) => {
//   arr.map(item => {
//     console.log(item);
//   });
//   return;
// };

// last passes the last item of the array into the callback.
const last = (arr, cb) => cb(arr[arr.length - 1]);

last(items, theLast => {
  console.log("theLast", theLast);
});

// sumNums adds two numbers (x, y) and passes the result to the callback.
const sumNums = (x, y, cb) => cb(x + y);

sumNums(1, 2, addMe => {
  console.log("addMe", addMe);
});

// multiplyNums multiplies two numbers and passes the result to the callback.
const multiplyNums = (x, y, cb) => cb(x * y);

multiplyNums(2, 4, timesMe => {
  console.log("timesMe", timesMe);
});

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
// const contains = (item, list, cb) => {
//   list.map(
//     if (list[i].includes(item)) {
//       return true;
//     } else {
//       return false;
//     });
// };

// contains("Gum", items, doesInclude => {
//   console.log("doesInclude", doesInclude);
// });

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
