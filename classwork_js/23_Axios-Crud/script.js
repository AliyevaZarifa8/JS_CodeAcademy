const BaseUrl = "http://localhost:8080/students";

let copyData = [];
let filteredData = [];

let tBody = document.querySelector("tbody");
let thFirstName = document.querySelector("#thFirstName");
let searchInput = document.querySelector("#searchInput");
let bysortName = "pramit";
let upIcon = document.querySelector(".fa-arrow-up");
let downIcon = document.querySelector(".fa-arrow-down");
const notification = document.querySelector("#notification");

async function drawTable() {
  const res = await axios(BaseUrl);
  const data = await res.data;
  tBody.innerHTML = "";
  // filteredData = copyData;
  copyData = data;
  filteredData = searchInput.value ? filteredData : data;
  console.log(filteredData);
  filteredData.forEach((element) => {
    tBody.innerHTML += `
      <tr>
      <td>${element.firstName}</td>
      <td>${element.surName}</td>
      <td>${element.email}</td>
      <td>
      <button class="btn btn-success" >Edit</button>
      <button class="btn btn-danger"  onclick=allDeleteObj('${element.id}')>Delete</button>
      </td>
      </tr>

      `;
  });
}
drawTable();

let myForm = document.querySelector("#userForm");
let addInputFirstName = document.querySelector("#firstName");
let addInputLastNamw = (e = document.querySelector("#lastName"));
let addInputEmail = document.querySelector("#email");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    firstName: addInputFirstName.value,
    surName: addInputLastNamw.value,
    email: addInputEmail.value,
  };

  addInputFirstName.value == "" ||
  addInputLastNamw.value == "" ||
  addInputEmail.value == " "
    ? alertDiv("Please fill", "warning")
    : axios.post(BaseUrl, obj);
});

function allDeleteObj(id) {
  console.log(id);
  axios.delete(`http://localhost:3000/students/${id}`);
  alertDiv("deleted", "danger");
}

thFirstName.addEventListener("click", function () {
  if (bysortName == "pramit") {
    copyData = filteredData;
    bysortName = "zrf";
    upIcon.style.display = "inline-block";
    downIcon.style.display = "none";
    copyData.sort((a, b) => b.firstName.localeCompare(a.firstName));
    console.log("first", copyData);
    drawTable();
  } else if (bysortName === "zrf") {
    bysortName = "pramit";
    upIcon.style.display = "none";
    downIcon.style.display = "inline-block";
    copyData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log("second", copyData);
    drawTable();
  }
});

searchInput.addEventListener("input", function () {
  filteredData = copyData;
  filteredData = filteredData.filter((item) =>
    `${item.firstName} ${item.lastName}`
      .toLocaleLowerCase()
      .includes(searchInput.value.toLocaleLowerCase())
      
  );

  drawTable();
});

function alertDiv(content, alertColor) {
  notification.className = `alert alert-${alertColor}`;
  notification.innerText = content;
  notification.visibility = "visible";
  // setTimeout(function () {
  //   notification.style.visibility = "hidden";
  // }, 3000);
}
