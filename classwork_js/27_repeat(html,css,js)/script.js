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

async function drawTable() {
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
         <a href="add.html?id=${element.id}" class="btn btn-success">Edit</a>
         <button class="btn btn-danger" onclick=deleteFunc(${element.id})>Delete</button>
         <button class="btn btn-primary btn-fav" onclick=addFav("${element.id}")>Add Fav</button>
     </td>
    </tr>
    `;
  });
}
drawTable();

async function deleteFunc(userId) {
  await axios.delete(`${baseUrl}/${userId}`);
}

const favStorage = JSON.parse(localStorage.getItem("favUser")) || [];
async function addFav(userId) {
  const res = await axios(`${baseUrl}/${userId}`);
  const data = await res.data;

  isTrue = favStorage.some((element) => element.id === data.id);

  if (!isTrue) {
    favStorage.push(data);
    localStorage.setItem("favUser",JSON.stringify(favStorage));
  } else {
    alert("Character already exists in favorite list!");
  }
}
