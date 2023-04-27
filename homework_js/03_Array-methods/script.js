//1
ary1 = [1, 2, 3];
ary2 = [80, 5, 100];
ary3 = [-500, 0, 50];
function getFirstValue(anyArrey) {
  return anyArrey[0];
}
console.log(getFirstValue(ary1));
console.log(getFirstValue(ary2));
console.log(getFirstValue(ary3));
//2
ary4 = [1, 2, 3];
ary45 = ["cat", "dog", "duck"];
ary6 = [true, false, true];
function getLastItem(anyArrey) {
  return anyArrey[anyArrey.length - 1];
}
console.log(getLastItem(ary4));
console.log(getLastItem(ary45));
console.log(getLastItem(ary6));

//3
ary7 = ["hi", "edabit", "fgh", "abc"];
ary8 = ["Red", "blue", "Blue", "Green"];
ary9 = ["a", "g", "y", "d"];
ary10 = ["Pineapple", "Orange", "Grape", "Apple"];
const findIndex = function (anyArrey) {
  for (i = 0; i < anyArrey.length; i++) {
    if (anyArrey[i] == "fgh") {
      console.log(i);
    }
    if (anyArrey[i] == "blue") {
      console.log(i);
    }
    if (anyArrey[i] == "d") {
      console.log(i);
    }
    if (anyArrey[i] == "Pineapple") {
      console.log(i);
    }
  }
};
findIndex(ary7);
findIndex(ary8);
findIndex(ary9);
findIndex(ary10);

// let findIndexs = function (arrey, word) {
//   return arrey.indexOf(word)
// };
// console.log(findIndexs(ary7, "abc"));

//4
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

//5
let lessThan100 = (a, b) => {
  if (a < 100 && b < 100) {
    return `${a + b} true`;
  } else {
    return `false`;
  }
};
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

//6

(obj1 = {
  width: 2,
  length: 5,
  height: 1,
}),
  (obj2 = {
    width: 4,
    length: 2,
    height: 2,
  }),
  (obj3 = {
    width: 2,
    length: 3,
    height: 5,
  });
function volumeOfBox(anyObj) {
  let multiply = 1;
  for (let item in anyObj) {
    multiply *= anyObj[item];
  }
  return multiply;
}
console.log(volumeOfBox(obj1));
console.log(volumeOfBox(obj2));
console.log(volumeOfBox(obj3));

//7
function basketPoint(a, b) {
  return 2 * a + 3 * b;
}
console.log(basketPoint(1, 1));
console.log(basketPoint(7, 5));
console.log(basketPoint(38, 8));

//8
const ary5 = [
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
  },
  {
    name: "my name",
    surname: "my surname",
    city: "my city",
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
