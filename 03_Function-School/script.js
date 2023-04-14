//School Task
//1
const ary1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
function getRandomLetter(anyArry) {
  return anyArry[Math.floor(Math.random() * anyArry.length)];
}
console.log(getRandomLetter(ary1));

//2
ary2 = [1, 2, 3, 4, 14, 5, 6, 8];
function calcSum(anyArrey) {
  let sum = 0;
  for (let item of anyArrey) {
    if (item % 2 == 0) {
      sum += item;
    }
  }
  return sum;
}
console.log(calcSum(ary2));
//3
ary3 = [-3, -5, -9, 3, 0, true, false, -22];
let arry=[]
const getPositiveNum = function (anyArrey) {
for (let item of anyArrey){
    arry.push(Math.abs(item))
}
return arry

}
console.log(getPositiveNum(ary3));

//   for (let i = 0; i < anyArrey.length; i++) {
//     if (anyArrey[i] < 0) {
//       anyArrey[i] *= -1;
//     } else {
//       anyArrey[i] *= 1;
//     }
//   }
//   return anyArrey;
// };
// console.log(getPositiveNum(ary3));

//4
const ary4 = [4, 9, 16, 20, 24, 43, 81, 100];
let ary = [];
let calcSquareRoot = (anyArrey) => {
  for (i = 0; i < anyArrey.length; i++) {
    ary.push(Math.round(Math.sqrt(anyArrey[i])));
  }
  return ary;
};
console.log(calcSquareRoot(ary4));

//5
const ary5 = [
  {
    name: "Ulfat",
    surname: "Zakirli",
    city: "Baku",
  },
  {
    name: "Ulfat",
    surname: "Zakirli",
    city: "Baku",
  },
  {
    name: "Ulfat",
    surname: "Zakirli",
    city: "Baku",
  },
];

function fillInfo(anyArrey) {
  for (let zarif of anyArrey) {
    zarif.name = "Zarifa";
    zarif.surname = "Alieffa";
    zarif.city = "Udjar";
  }
  return anyArrey;
}
console.log(fillInfo(ary5));
