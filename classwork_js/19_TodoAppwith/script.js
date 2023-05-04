let row=document.querySelector(".row")
let textInput=document.querySelector(".form-control")
let addButton=document.querySelector("#button-addon2")
let editButton=document.querySelector(".bg-success")
let deleteButton=document.querySelectorAll(".bg-danger")
let ul=document.querySelector(".list-group")
let checkBox=document.querySelector("#checbox")
let span=document.querySelector("span")

let UserArr=JSON.parse(localStorage.getItem("UserArr")) || []

function listInputValue() {
    ul.innerHTML = "";
    UserArr.forEach((item) => {
      ul.innerHTML += `
      <li class="list-group-item list-group-item-info d-flex  justify-content-center align-items-center h-20 mb-3 "> 
      <input type="checkbox" name="" id="checbox" class="ms-2 me-3 onclick=checkTodo(${UserArr.id}) ">
    <span class=" me-5 "> ${item.text}</span>
    <div class="div">
      <div class="twobutton">
          <button class="btn btn-outline-secondary text-black ms-5 bg-success" type="button" onclick=editTodo(${item.id})  id="button-addon2">EDIT</button>
          <button class="btn btn-outline-secondary text-black bg-danger" type="button" onclick=removeTodo(${item.id})  id="button-addon2">DELETE</button>
      </div>

  </li>
              `;
    });
  }

addButton.addEventListener("click",function(){
    let userData={
        text: textInput.value,
        id:Date.now()   
    }
    UserArr.push(userData)

    localStorage.setItem("UserArr", JSON.stringify(UserArr))
    listInputValue()
})

 function removeTodo(id){
    console.log(id);
    UserArr=UserArr.filter((obj)=>obj.id!=id)
    localStorage.setItem("UserArr",JSON.stringify(UserArr))
    listInputValue()
}
//   function editTodo(){
//     textInput.value = this.closest("li").firstElementChild.innerText;
//     this.closest("li").remove();
//     addButton.innerHTML="EDIT"
//     listInputValue()
//   }

// function checkTodo(                                                                  ){
// span.style.textDecoration="through-line"
// listInputValue()
// }