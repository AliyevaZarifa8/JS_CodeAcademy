function myFun(str) {
  let value = 0;
  let arr = [];
  str.split``.map((letter) => {
    value = str.split(letter).length - 1;
    arr.push([letter, value]);
  });
  return Object.fromEntries(arr)
}

console.log(myFun("Zerife"));
