//1
let year = 365;
function calcAge(age) {
  if (age == 65 || age == 0 || age == 20) {
    return age * year;
  }
  return 0;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

//2
// let namee=0
let myName = "Front-end Developer";
for (i = 0; i < myName.length; i++) {
  myName+=i;
  console.log(myName[i]);
}

//3
let sum = 0;
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log("sum :", sum);
//4

let multiply = 1;
for (let i = 1; i < 17; i++) {
  if (i % 2 == 1) {
    multiply *= i;
  }
}
console.log("multiply: ", multiply);

//4
let multiplyy = 1;
for (let i = 10; i < 19; i++) {
  multiplyy *= i;
}
console.log("multiply: ", multiplyy);

//5
let summ = 0;
for (let i = 17; i < 31; i++) {
  if (i == 19 || i == 20) {
    continue;
  }
  summ += i;
}
console.log("sum :", summ);

//6
let even = 0;
for (let i = 0; i < 31; i++) {
  if (i % 2 == 0) {
    even += i;
  }
}
console.log("sum :", even);
//6
let odd = 0;
for (let i = 0; i < 31; i++) {
  if (i % 2 == 1) {
    odd += i;
  }
}
console.log("sum :", odd);
//7

for (let i = 1; i < 17; i++) {
  if (i % 2 == 0 && 2 ** 1 == i) {
    console.log("even and 2 of power number : ", i);
  }
  if (i % 2 == 0 && 2 ** 2 == i) {
    console.log("even and 2 of power number : ", i);
  }
  if (i % 2 == 0 && 2 ** 3 == i) {
    console.log("even and 2 of power number : ", i);
  }
  if (i % 2 == 0 && 2 ** 4 == i) {
    console.log("even and 2 of power number : ", i);
  }
}

