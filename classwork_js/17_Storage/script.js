// let clickBtn=document.querySelector("#btn")
// let removeBtn=document.querySelector("#remove")

//////////////1

// clickBtn.addEventListener("click",function(){

//     localStorage.setItem('firstName', 'Kamran');
//     localStorage.setItem('lastName', 'Ahmedov');
//     localStorage.setItem('age', '23')

// })

///////////////2

// let firstName = localStorage.getItem("firstName");
//         console.log("firstname- ", firstName);
// let lastName = localStorage.getItem("lastName");
//         console.log("lastname- ", lastName);
// let age = localStorage.getItem("age");
//         console.log("age - ", age);

// Object.keys(localStorage).forEach(function(key){
//     console.log(key);
// })
// //////////////3

// Object.keys(localStorage).forEach(function(key){
//     console.log(localStorage.getItem(key));
// })

// /////////////4
// console.log(localStorage.key(0));
///1

// let array=[...Object.keys(localStorage)]
// console.log(array);

/////////////////5
// console.log(Object.values(localStorage)[0]);

// ///1
// console.log(Object.values(localStorage))

////////////////6
// removeBtn.addEventListener("click",function(){

//     localStorage.removeItem('firstName', 'Kamran');
// })
// ////1
// removeBtn.addEventListener("click",function(){

//     localStorage.removeItem('firstName', 'Kamran');
//     localStorage.removeItem('lastName', 'Ahmedov');
//     localStorage.removeItem('age', '23')

// })

let exampleInputusername = document.querySelector("#exampleInputusername");
let exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
let exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
let exampleCheck1 = document.querySelector("#exampleCheck1");
let myForm = document.querySelector("#myform");
let allInput = document.querySelectorAll("input");

let newArr = JSON.parse(localStorage.getItem("newArr")) || [];
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    userName: exampleInputusername.value,
    email: exampleInputEmail1.value,
    pasword: exampleInputPassword1.value,
    check: exampleCheck1.checked,
  };
  obj.userName === "" || obj.email === ""
    ? alert(" pls enter username vs email")
    : newArr.push(obj);

  // newArr.filter((item)=>item.value==obj.value
  // ?alert(" your already compliated form")
  // :newArr.push(obj))
  exampleInputusername.value = "";
  exampleInputEmail1.value = "";
  exampleInputPassword1.value = "";
  exampleCheck1.checked = false;
  

  localStorage.setItem("newArr", JSON.stringify(newArr));
});
