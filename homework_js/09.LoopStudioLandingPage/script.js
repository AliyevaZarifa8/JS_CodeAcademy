let menuPink = document.querySelector(".menu");
let menuBlack = document.querySelector(".menicon");
let bodyBlack = document.querySelector(".menuclick");
let bodyPink = document.querySelector("#header");

bodyBlack.style.display = "none";

menuPink.addEventListener("click", function () {
  bodyBlack.style.display = "block";
  bodyPink.style.display = "none";
});

menuBlack.addEventListener("click", function () {
  bodyBlack.style.display = "none";
  bodyPink.style.display = "block";
});
