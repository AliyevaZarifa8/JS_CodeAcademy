// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']  

console.log(arr1.map((el=>el[0].toUpperCase()+ el.slice(1,-1)+el.at(-1).toUpperCase())));

// 2.String and Array
let text = 'We are MERN-Stack developers'
//1
console.log(text.replace("MERN-Stack","Front-end"));
//2
console.log(text.toLocaleLowerCase().replaceAll("e","a"));
//3
console.log(text.concat("in Microsoft!"));
//4
let newArr=[]
text.split("").map((el,i)=>el.toLocaleLowerCase()==="r".toLocaleLowerCase() ? newArr.push(i): newArr)
console.log(newArr);
//5
console.log(text.indexOf("r".toUpperCase(),5));
//6
 let newAr=[]
 let vowels=['a','i','o','u','e']
console.log(vowels.includes(text.split("").map(el=>el=el)));