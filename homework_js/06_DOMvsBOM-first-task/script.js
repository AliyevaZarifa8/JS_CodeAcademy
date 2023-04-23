let startBtn = document.querySelector(".container .start");
let numberSpan = document.querySelector(".container .numbers");
let stopBtn = document.querySelector(".container .stop");
let incrementBtn = document.querySelector(".container .increment");
let decrementBtn = document.querySelector(".container .decrement");
let resetBtn = document.querySelector(".container .reset");
// let numberInput = document.querySelector(".container  .multinum");
// let inputValueBtn = document.querySelector(".container .inpulValue");

let count = 0;
let interval;
startBtn.addEventListener("click", function () {
  clearInterval(interval);

  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  interval = setInterval(() => {
    count++;
    numberSpan.innerText = count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);

  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", "true");
});
incrementBtn.addEventListener("click", function () {
  numberSpan.innerText = ++count;
});
decrementBtn.addEventListener("click", function () {
  numberSpan.innerText = --count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  numberSpan.innerText = 0;
  clearInterval(interval);

  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
    incrementBtn.removeAttribute("disabled");
  decrementBtn.removeAttribute("disabled");


});
function myFunction() {
  let x = document.querySelector(".container #myNumber").value*2;
   
}
