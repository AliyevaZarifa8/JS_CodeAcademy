let myForm = document.querySelector("#myform");
let addInputcntName = document.querySelector("#countName");
let addInputCountry = document.querySelector("#country");

myForm.addEventListener("submit", function (e) {
    console.log(2);
  e.preventDefault();
  fetch(`https://northwind.vercel.app/api/customers/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contactName: addInputcntName.value,
      address: {
        country: addInputCountry.value,
      },
    }),
  });
  window.location = "index.html";
  getAllObj();
});
