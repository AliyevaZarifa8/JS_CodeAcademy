// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.

// filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
// filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]
function filterNumber(anyArrey) {
  return anyArrey.filter((el) => (el = typeof el === "number"));
// return anyArrey.filter((el)=>el===Number(el))
// return anyArrey.filter((el)=>el===Number.isInteger(el))

}

console.log(filterNumber([1, "c", 2, "a", "b"]));
console.log(filterNumber(["4", 1, "a", "b", 0, 15]));

// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0
function sliceSum(anyArrey, n) {
  return anyArrey.slice(0, n).reduce((acc, curr) => acc + curr, 0);
}
console.log(sliceSum([9, 8, 7, 6], 3));
console.log(sliceSum([1, 3, 2], 2));
console.log(sliceSum([3, 6, 2], 0));

// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// spelling("bee") // ["b", "be", "bee"]
// spelling("happy") //["h", "ha", "hap", "happ", "happy"]

function findSpelt(str) {
  return  str.split('').map((el,i)=>str.slice(0,i+1))
}
console.log(findSpelt('hello'));
console.log(findSpelt('bee'));

///////////////////////second way
// let happy = "happy";
// let newText = "";
// let bee = "bee";
// for (i = 0; i < happy.length; i++) {
//   newText += happy[i];
//   console.log(newText);
// }
// let newBext = "";
// for (i = 0; i < bee.length; i++) {
//   newBext += bee[i];
//   console.log(newBext);
// }

// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

// hashPlusCount("###+") // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]

function hashPlusCount(str) {
    let hashes=0
    let pluses=0
    str.split``.map(el=> el==="#" ? hashes++ :pluses++)
    return [hashes,pluses]
}
console.log(hashPlusCount("###+"));
console.log(hashPlusCount("#+++#+#++#"));
console.log(hashPlusCount(""));





// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// reverseCase("Happy Birthday") //"hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") //"many thanks"
function reverseCase(string) {
  return string
    .split('')
    .map((el) =>
      el === el.toLocaleLowerCase() ? el.toLocaleUpperCase() : el.toLocaleLowerCase()
    ).join('')
}
console.log(reverseCase("Happy Birthday"));
console.log(reverseCase("MANY THANKS"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let str="i am zarifa"
console.log(str.split``);
console.log(Array.from(str));
console.log([...str]);