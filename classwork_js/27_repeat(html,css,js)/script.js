let menuIcon = document.querySelector("#menu");
let closeIcon = document.querySelector("#close");
let BlackDiv = document.querySelector(".black-div");

menuIcon.addEventListener("click", function () {
  BlackDiv.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  BlackDiv.style.display = "none";
});
