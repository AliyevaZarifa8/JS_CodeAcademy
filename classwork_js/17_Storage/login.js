let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".form-control");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let LocalObj = JSON.parse(localStorage.getItem("newArr"));
  console.log(LocalObj);
  let dataCom = LocalObj.find(
    (item) =>
      item.email === allInputs[0].value || item.password === allInputs[1].value
  );

  if (dataCom) {
    localStorage.setItem("userName", dataCom.userName);
    window.location.href =
      "http://127.0.0.1:5500/classwork_js/17_Storage/home.html";
  } else {
    alert("wrong information");
  }
});
