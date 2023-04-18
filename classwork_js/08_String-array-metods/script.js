// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']

console.log(
  "first : ",
  arr1.map(
    (el) => el[0].toUpperCase() + el.slice(1, -1) + el.at(-1).toUpperCase()
  )
);

// 2.String and Array
let text = "We are MERN-Stack developers";
//1
console.log("seconds : ", text.replace("MERN-Stack", "Front-end"));
//2
console.log("seconds : ", text.toLocaleLowerCase().replaceAll("e", "a"));
//3
console.log("seconds : ", text.concat("in Microsoft!"));
//4
let newArr = [];
text
  .split("")
  .map((el, i) =>
    el.toLocaleLowerCase() === "r".toLocaleLowerCase() ? newArr.push(i) : newArr
  );
console.log("seconds : ", newArr);
//5
console.log("seconds : ", text.indexOf("r".toUpperCase(), 5));
//6
let newAr = [];
let vowels = ["a", "i", "o", "u", "e"];
text
  .split("")
  .map((el, i, arry) =>
    vowels.includes(el) && arry.indexOf(el) === i ? newAr.push(el) : newAr
  );
console.log("seconds : ", newAr);
//////////////////////3

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr3'.
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

let calcArea = (anyArrey) => {
  return anyArrey.reduce(
    (sum, curr) => (curr.region.length === 6 ? sum + curr.area : sum),
    0
  );
};
console.log("third : ", calcArea(arr3));

// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
console.log(
  "forth : ",
  arr4.sort((a, b) => a - b)
);

// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log("fifth : ", arr5.flat(3));

// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
let newColors;
colors
  .sort()
  .filter((el, i) => (el[i] < el.length ? newColors.push(el) : newColors));
console.log("sixth : ", newColors);

// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']
