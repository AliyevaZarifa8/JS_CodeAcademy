const BaseUrl = "http://localhost:8080/blogs";

let myForm = document.querySelector("#userForm");
let addInputBlogTitle = document.querySelector("#blogtitle");
let addBlogBody = (e = document.querySelector("#blogbody"));
let addBlogAutor = document.querySelector("#blogauthor");
let author;

addBlogAutor.addEventListener("change", function (event) {
  author = event.target.value;
});

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    title: addInputBlogTitle.value,
    body: addBlogBody.value,
    author: author || "Pramit",
  };

  addInputBlogTitle.value == "" || addBlogBody.value == ""
    ? alert("pls enter somthing")
    : axios.post(BaseUrl, obj);

  window.location.href = "home.html";
});
