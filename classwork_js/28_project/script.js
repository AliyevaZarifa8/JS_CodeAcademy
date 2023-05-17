let row = document.querySelector(".row");
let searchInput = document.querySelector("#searchInput");
let selectRegion = document.querySelector("#select");
let spinnerInfo = document.querySelector("#spinner");
spinnerInfo.style.display = "flex";

function drawRow(array) {
  row.innerHTML = "";
  array.forEach((element) => {
    row.innerHTML += `
 
    <div class="col col-xl-3 col-lg-4 col-md-6 col col-sm-12">
   <div class="content">
   <a href="details.html?name=${element.name}">
       <div class="card" style="width: 18rem"> 
       <img src="${element.flags?.svg}" class="card-img-top" alt="...">
       <div class="card-body">
         <h4 class="card-title">${element.name}</h4>
         <p class="card-text">${element.population}</p>
          <p>${element.region}</p>
          <p>${element.capital}</p>
       </div>
       </div>
    </a>
   
   </div>
 </div>
    `;
  });
}

axios("https://restcountries.com/v2/all").then((res) => {
  spinnerInfo.style.display = "none";
  drawRow(res.data);
});

searchInput.addEventListener("input", async function (event) {
  spinnerInfo.style.display = "flex";
  const res = await axios("https://restcountries.com/v2/all");
  const data = res.data;
  let filterSearch = data.filter((item) => {
    return item.name
      .toLocaleUpperCase()
      .includes(event.target.value.toLocaleUpperCase());
  });
  spinnerInfo.style.display = "none";
  drawRow(filterSearch);
});
selectRegion.addEventListener("input", async function (e) {
  spinnerInfo.style.display = "flex";
  const res = await axios("https://restcountries.com/v2/all");
  let data = await res.data;
  let filterUser = data.filter((elem) =>
    elem.region.toLowerCase().includes(e.target.value.toLowerCase())
  );
  spinnerInfo.style.display = "none";
  drawRow(filterUser);
});

// searchInput.addEventListener("input",function(e){
//     axios("https://restcountries.com/v2/all").then((res)=>{
//         let filterData=res.data.filter((el)=>{
//             return el.name.toLowerCase().includes(e.target.value.toLowerCase())
//         })
//         drawRow(filterData)
//     })
// })

// selectRegion.addEventListener("input",function(e){
//     axios("https://restcountries.com/v2/all").then((res)=>{
//         let filterArr=res.data.filter((el)=>{
//             return el.region.toLowerCase().includes(e.target.value.toLowerCase())
//         })
//      drawRow(filterArr)
//     })
// })
