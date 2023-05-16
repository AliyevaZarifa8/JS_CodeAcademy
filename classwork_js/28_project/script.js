let row=document.querySelector(".row")
let searchInput=document.querySelector("#searchInput")



function drawRow(array){ 
     row.innerHTML=""
    array.forEach(element => {
    row.innerHTML+=`
 
    <div class="col-3">
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
    `
});


    
}

axios("https://restcountries.com/v2/all").then((res)=>{
    drawRow(res.data)
})


searchInput.addEventListener("input",function(e){
    axios("https://restcountries.com/v2/all").then((res)=>{
        let filterData=res.data.filter((el)=>{
            return el.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        drawRow(filterData)
    })
})







