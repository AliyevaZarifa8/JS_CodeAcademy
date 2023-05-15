const BaseUrl = "http://localhost:8080/blogs";
let id = new URLSearchParams(window.location.search).get("id");

let myForm = document.querySelector("#userForm");
let editInputBlogTitle = document.querySelector("#blogtitle");
let editBlogBody = (e = document.querySelector("#blogbody"));
let editBlogAutor = document.querySelector("#blogauthor");
let author;

axios(`${BaseUrl}/${id}`).then((res) => {
  console.log(res.data);
  editInputBlogTitle.value = res.data.title;
  editBlogBody.value = res.data.body;
  editBlogAutor.value = res.data.author;
  console.log("helo");
});

editBlogAutor.addEventListener("change", function (event) {
  author = event.target.value;
  console.log(author);
});

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    title: editInputBlogTitle.value,
    body: editBlogBody.value,
    author: author || "Pramit",
  };

  axios.put(`${BaseUrl}/${id}`, obj);

  window.location.href = "home.html";
});
