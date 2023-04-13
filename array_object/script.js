//1
let myText =
  "An Array is a collection of items of same data type stored at contigous  memory locations.";
let count = 0;
for (let i = 0; i < myText.length; i++) {
  if (myText[i] == "A" || myText[i] == "a") {
    count++;
  }
}
console.log(`There are ${count} of "a" or n"A" `);
//2
let sum = 0;
const arry1 = [1, 2, 4, 5, 7, 9, 13, 22];
for (let i = 0; i < arry1.length; i++) {
  sum += arry1[i];
}
console.log(sum);
//3
const arry2 = [false, 0, 2, true, 23, undefined, "are u stack?", "come on"];
for (let i = 0; i < arry2.length; i++) {
  if (i == 0) {
    continue;
  }
  if (i % 2 == 1) {
    console.log(arry2[i]);
  }
}
//4
let newText = "";
let text1 = "How is it going";
for (i = 0; i < text1.length; i++) {
  if (text1[i] != "i") {
    newText += text1[i];
  }
}
console.log(newText);

//5
const numberArry = [2, false, "5", "true", 9, 0, "1"];
let summ = 0;
for (i = 0; i < numberArry.length; i++) {
  if (typeof numberArry[i] == "number") {
    summ += numberArry[i];
  }
}
console.log(summ);
//6
const mixType = [1, "3", 4, false, null, 22, true];
// const result = mixType.map(String);
// console.log(result);
mixType[0] = String(0);
mixType[2] = String(4);
mixType[3] = String(false);
mixType[4] = String(null);
mixType[5] = String(22);
mixType[6] = String(true);
console.log(mixType);

//7

let multiply=1;
const myObj = {
  color: "red",
  width: 320,
  heigth: 200,
  padding: 4,
  fontSize: "22px",
};
for(i=0;i<myObj.length;i++){
    if(typeof myObj=='number')
    multiply*=myObj
}
console.log(multiply);
