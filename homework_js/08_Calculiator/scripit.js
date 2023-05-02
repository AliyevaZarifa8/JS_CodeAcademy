let inputSum = document.querySelector("#valuesum");
let inputValue1 = document.querySelector("#value1");
let inputValue2 = document.querySelector("#value2");
let additionBtn = document.querySelector("#addition");
let substractBtn = document.querySelector("#substract");
let multiplyBtn = document.querySelector("#multiply");
let divisionBtn = document.querySelector("#division");
let resetBtn = document.querySelector("#reset");

inputSum.value = 0;

additionBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :inputSum.value = +inputValue1.value + +inputValue2.value;
});
substractBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :inputSum.value = +inputValue1.value - +inputValue2.value;
});
multiplyBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :inputSum.value = +inputValue1.value * +inputValue2.value;
});
divisionBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :inputSum.value = Math.ceil(+inputValue1.value / +inputValue2.value);
});
resetBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :inputSum.value = 0;
});
