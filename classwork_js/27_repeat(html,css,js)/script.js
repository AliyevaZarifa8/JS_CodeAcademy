let menuIcon = document.querySelector("#menu");
let closeIcon = document.querySelector("#close");
let BlackDiv = document.querySelector(".black-div");

menuIcon.addEventListener("click", function () {
  BlackDiv.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  BlackDiv.style.display = "none";
});

const baseUrl = " http://localhost:8080/user";
let tBody = document.querySelector("tbody");

async function drawTable(array) {
  const res = await axios(baseUrl);
  const data = await res.data;
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
     <td>${element.id}</td>
     <td><img src="${element.photo}"></td>
     <td>${element.name}</td>
     <td>${element.surname}</td>
     <td>${element.email}</td>
     <td>${element.date}</td>
     <td>
         <a href="" class="btn btn-success">Edit</a>
         <button class="btn btn-danger" onclick=deleteFunc(${element.id})>Delete</button>
         <button class="btn btn-primary">Add Fav</button>
     </td>
    </tr>
    `;
  });
}
drawTable();

async function deleteFunc(userId) {
  console.log("deleted");
  await axios.delete(`${baseUrl}/${userId}`);
}
