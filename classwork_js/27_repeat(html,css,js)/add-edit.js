const baseUrl = " http://localhost:8080/user";
let myForm = document.querySelector("#myForm");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let InputEmail1 = document.querySelector("#InputEmail1");
let InputPhoto = document.querySelector("#photo");
let textChange = document.querySelector("#text");
let btnChange = document.querySelector("#button");
const date = new Date();
let id = new URLSearchParams(window.location.search).get("id");

if (id) {
  textChange.innerHTML = "Edit";
  btnChange.innerHTML = "Edit";

  axios(`${baseUrl}/${id}`).then((res) => {
    firstName.value = res.data.name;
    lastName.value = res.data.surname;
    InputEmail1.value = res.data.email;
    
  });
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    photo: `./image/${InputPhoto.value.split("\\")[2]}`,
    name: firstName.value,
    surname: lastName.value,
    email: InputEmail1.value,
    date: date.toLocaleString(),
  };

  if (!id) {
    axios.post(baseUrl, obj);
  } else {
    axios.put(`${baseUrl}/${id}`, obj);
  }
});
