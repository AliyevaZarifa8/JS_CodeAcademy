// import { Base_URL } from "./api.js";

let tBody = document.querySelector("tbody");

let button = document.querySelector("button");

function getAllSuppliers() {
  fetch(`https://northwind.vercel.app/api/orders`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        let tr = document.createElement("tr");
        tr.innerHTML = "";
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.customerId}</td>
        <td>${element.shipAddres?.city}</td>
        <td>${element.shipAddres?.country}</td>
        <td>${element.shipAddres?.postalCode}</td>
        <td><button  onclick=deleButton("${element.id}")  id="button">Delete</button></td>

        `;
        tBody.append(tr);
      })
    );
}
getAllSuppliers();

function deleButton() {
  fetch(`https://northwind.vercel.app/api/orders`, {
    method: "DELETE",
  }).then(() => {
    getAllSuppliers();
  });

  console.log("helloooo");
}
deleButton();
