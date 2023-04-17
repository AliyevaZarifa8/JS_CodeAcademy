let arr = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];
//1.Yuxaridaki arraydaki butun reqemlerin cemini tapin (Foreach methodu istifadə edərək)
function sumOfArray(anyArrey) {
  let sum = 0;

  anyArrey.forEach((element) => {
    sum += element;
  });

  return sum;
}

console.log(sumOfArray(arr));

// 2.Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin

function findDigitCountInsideArray(anyArrey, number) {
  let count = 0;
  anyArrey.forEach((element) => {
    element == number && count++;
    //   el == 5 ? count++ : null;
  });

  return count;
}
console.log(findDigitCountInsideArray(arr, 5));

// 3.Arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin

function findMaxDigit(anyArrey) {
  let count = 0;
  let maxNumber = Math.max(...anyArrey);
  anyArrey.forEach((el) => {
    el == maxNumber && count++;
  });

  return `${maxNumber} repeated ${count} times`;
}

console.log(findMaxDigit(arr));

// 4)Arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

console.log(arr.find((el) => el % 3 == 2));

// console.log(arr.findIndex((el) => (el == el % 3) == 2));
