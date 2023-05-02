let paragSum = document.querySelector("#valuesum");
let inputValue1 = document.querySelector("#value1");
let inputValue2 = document.querySelector("#value2");
let additionBtn = document.querySelector("#addition");
let substractBtn = document.querySelector("#substract");
let multiplyBtn = document.querySelector("#multiply");
let divisionBtn = document.querySelector("#division");
let resetBtn = document.querySelector("#reset");

paragSum.innerText = 0;

additionBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :paragSum.innerText = +inputValue1.value + +inputValue2.value;
});
substractBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :paragSum.innerText = +inputValue1.value - +inputValue2.value;
});
multiplyBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :paragSum.innerText = +inputValue1.value * +inputValue2.value;
});
divisionBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value==="" || inputValue2.value==0
    ? alert("Pls enter the correct numbers for the calculator to work")
    :paragSum.innerText = (+inputValue1.value / +inputValue2.value).toFixed(2)
});
resetBtn.addEventListener("click", function () {
    inputValue1.value==="" || inputValue2.value===""
    ? alert("Pls enter a number in value1 vs value2 input")
    :paragSum.innerText = 0 ,inputValue1.value="" , inputValue2.value="";
});
