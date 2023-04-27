////////////// TEST 1 //////////////

let text = "there";

//console.log(`hello ${3 + 8} + 5 +${'i am fine'}`); // ?
//answer:hello 11+5+i am fine

//console.log(`hello ${"3 + 8" + 2}`); // ?
//answer: hello 3+82

//console.log(`hello ${"text"}`); // ?
//answer:hello text

//console.log(`hello ${text}`); // ?
//answer:hello there

//console.log(4 + 2 + '5' + 2 + 'a')
//answer:652a

////////////// TEST 2 //////////////

// 1.Multiply 12 with 8, and console the result:
console.log(12 * 8);
// 2.Divide 10 by 2 add result to variables x, and console x:
let x = 10 / 2;
console.log(x);
// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
let num1 = 20;
let num2 = 17;
console.log(num1 + num2);
/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */
let firsName = "Zarifa";
let surName = "Alieffa";
let age = 19;
console.log(`${firsName} ${surName} is age ${age} `);
// 5.Console the remainder(%) when 17 is divided by 12.
let num3 = 17;
let num4 = 12;
console.log(num3 % num4);
// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
var cityName = "Baku";
var cityName = "Ganca";
console.log(cityName);
// 7. Create a object add your name,surname and age. Then copy and assign it to new object call "copy obj"(camelCase)
let obj = {
  firstName: "Zarifa",
  surnName: "Alieffa",
  ages: 19,
};
let newObj = obj;
console.log(newObj);

// 8. Create a object add "city name"(camelCase) Baku, uni Gence and your qualification. then copy this obj to a new one called new obj(camelCase),
// but change "city name" to "Gence".
let objInfo = {
  cityNames: "Baku",
  uni: "Gence",
  que: "RIM",
};
objInfo.cityNames = "Ganca";
let newObjinfo = objInfo;
console.log(newObjinfo);
////////////// TEST 3 //////////////

let a = 1,
  b = 1;
let c = ++a;
let d = b++;

// console.log(c); // 2

// console.log(d); // 1
// console.log(b); // 2

////////////// TEST 4 //////////////

let a1 = 2;
let x1 = 1 + (a1 *= 2);
console.log(x); // 5

////////////// TEST 5 //////////////

// console.log('test1', test); //  test is not defind
// {
//     let test = "something"
//     console.log('test2', test); //  test2 something
// }
//console.log("test3", test); // test3 undifiend



