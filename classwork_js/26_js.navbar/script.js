let menuIcon = document.querySelector(".menu");
let navInput = document.querySelector(".nav-inp");

menuIcon.addEventListener("click", function () {
  navInput.classList.toggle("show");

  navInput.classList.contains("show")
    ? (navInput.style.display = "flex")
    : (navInput.style.display = "none");
});
