const BaseUrl = "http://localhost:8080/blogs";
let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".singcard");

axios(`${BaseUrl}/${id}`).then((res) => {
  cards.innerHTML = `
    <div class="col-3"></div>
    <div class="col-6 border p-4 bg-dark mt-5  p-5 ">
      <h2 class="text-info">${res.data.title}</h2>
      <p class="text-success">
      ${res.data.body}
      
      </p>
      <small class="text-danger ">${res.data.author}</small>
      <div class="row d-flex mt-4">
    
        <a href="./home.html" class="btn btn-primary w-25 ms-4">Go Back</a>
      </div>
    </div> 
    
    `;
});
