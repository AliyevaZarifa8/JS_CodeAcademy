const baseUrl = " http://localhost:8080/user";
let myForm = document.querySelector("#myForm");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let InputEmail1 = document.querySelector("#InputEmail1");
let InputPhoto = document.querySelector("#photo");
const date = new Date();

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form");
  console.log(InputPhoto.value);
  let obj = {
    photo: `./image/${InputPhoto.value.split("\\")[2]}`,
    name: firstName.value,
    surname: lastName.value,
    email: InputEmail1.value,
    date: date.toLocaleString(),
  };
  axios.post(baseUrl, obj);
});
