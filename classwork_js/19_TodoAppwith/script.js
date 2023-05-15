let row = document.querySelector(".row");
let textInput = document.querySelector(".form-control");
let addButton = document.querySelector("#button-addon2");
let ul = document.querySelector(".list-group");
let checkBox = document.querySelector("#checbox");
let span = document.querySelector("span");

let UserArr = JSON.parse(localStorage.getItem("UserArr")) || [];

function listInputValue() {
  ul.innerHTML = "";
  UserArr.forEach((item) => {
    ul.innerHTML += `
      <li class="list-group-item list-group-item-info d-flex  justify-content-between align-items-center h-30 "> 
      <div>
        <input type="checkbox" name="" id="checbox" onclick=checkTodo(${UserArr.id})>
        <span class="">${item.text}</span>
      </div>
        <div class="div">
          <div class="twobutton">
              <button class="btn btn-outline-secondary text-black  bg-success" onclick=editTodo(${item.id}) type="button" id="button-addon2">EDIT</button>
              <button class="btn btn-outline-secondary text-black  bg-danger" onclick=removeTodo(${item.id}) type="button" id="button-addon2">DELETE</button>
          </div>
    
      </li>
              `;
  });
}

addButton.addEventListener("click", function () {
  let userData = {
    text: textInput.value,
    id: Date.now(),
  };

  textInput.value === "" ? alert("Somthing type...") : UserArr.push(userData);

  localStorage.setItem("UserArr", JSON.stringify(UserArr));
  listInputValue();
  textInput.value = "";
});

function removeTodo(id) {
  console.log(id);
  UserArr = UserArr.filter((obj) => obj.id != id);
  localStorage.setItem("UserArr", JSON.stringify(UserArr));
  listInputValue();
}

function editTodo(id) {
  dataArr = JSON.parse(localStorage.getItem("UserArr"));
  // textInput.value = dataArr.text;

  addButton.innerHTML = "EDIT";
  listInputValue();
}

// function checkTodo(){
// span.style.textDecoration="through-line"
// listInputValue()
// }
