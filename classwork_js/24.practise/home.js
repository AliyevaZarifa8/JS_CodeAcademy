const BaseUrl = "http://localhost:8080/blogs";
let row = document.querySelector(".cards");

function fillCard(anyArr) {
  anyArr.forEach((element) => {
    row.innerHTML += `  
    <div class="col-3"></div>
    <div class="col-8 border p-4  mb-4">
      <h2 class="text-primary">${element.title}</h2>
      <p class="text-danger"></p>
       ${element.body.slice(0, 70)}... <a href="./details.html?id=${
      element.id
    }" >Read More</a>
      </p>
      <small class="text-secondary ">${element.author}</small>
      <div class="row d-flex mt-4">
        <button class="btn btn-danger w-25 "  onclick=cardDelete(${
          element.id
        })>Delete</button>

        <a href="edit.html?id=${
          element.id
        }" class="btn btn-warning w-25 ms-4">Edit</a>
      </div>
    </div>
    `;
  });
}
axios(BaseUrl).then((res) => fillCard(res.data));

///delete

function cardDelete(id) {
  axios.delete(`${BaseUrl}/${id}`);
}
