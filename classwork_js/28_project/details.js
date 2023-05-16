
let countrname = new URLSearchParams(window.location.search).get("name");
let card = document.querySelector(".card");

axios(`https://restcountries.com/v3.1/name/${countrname}`).then((res) => {
  card.innerHTML = `
    <div class="col-3"></div>
    <div class="col-6 border p-4 bg-dark mt-5  p-5 ">
      <img src="${res.data[0].flags?.svg}" class="card-img-top" alt="...">
      <h2 class="text-info">${res.data[0].name.common}</h2>
      <p class="text-success">
      ${res.data[0].population}</p>
      <p class="text-warning ">${res.data[0].region}</p>
      <p class="text-danger ">${res.data[0].capital}</p>
      <div class="row d-flex mt-4">
        <a href="index.html" class="btn btn-primary w-25 ms-4">Go Back</a>
      </div>
    </div> 
    
    `;
});