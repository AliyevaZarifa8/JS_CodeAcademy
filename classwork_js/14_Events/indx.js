let names = document.querySelector("#name");
let surName = document.querySelector("#surname");
let email = document.querySelector("#email");
let passWord = document.querySelector("#pasword");
let checkbox = document.querySelector("#checkbox");
let parag = document.querySelector("#parag");
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
let notnow = document.querySelector("#notnow");
let submit = document.querySelector("#submit");
let check = document.querySelector("#check");
let radio = document.getElementsByName("radio");

names.addEventListener("mouseover", function () {
  names.style.backgroundColor = "yellow";
  names.style.color = "black";
});

names.addEventListener("mouseout", function () {
  names.style.backgroundColor = "white";
  names.style.color = "white";
});

surName.addEventListener("mousemove", function () {
  surName.style.backgroundColor = "teal";
});
surName.addEventListener("mouseout", function () {
  surName.style.backgroundColor = "white  ";
});

email.addEventListener("contextmenu", function () {
  email.style.border = " 1px solid yellow";
});

passWord.addEventListener("focus", function (event) {
  event.target.value = "askrjfgnralg";
});

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    check.style.visibility = "visible";
  } else {
    check.style.visibility = "hidden";
  }
});

radio.forEach((element) => {
  element.addEventListener("click", function () {
    alert("Thanks!");
  });
});

// radio.addEventListener("click", function (event) {
//   event.forEach((el) => {
//     alert("Thanks!");
//   });
// });

submit.addEventListener("submit", function () {
  names.value === "" && surName.value === "" && !checkbox.checked
    ? submit.setAttribute("disabled", "true")
    : submit.removeAttribute("disabled");
});
