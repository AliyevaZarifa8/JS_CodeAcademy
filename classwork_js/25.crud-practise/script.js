let tBody = document.querySelector("tbody");
let load = document.querySelector(".loading");
load.style.display = "flex";

function drawTable(arr) {
  tBody.innerHTML = "";
  load.style.display = "none";
  arr.forEach((element) => {
    tBody.innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains[0]}</td>
    <td><a  href=" ${element.web_pages[0]}" target="_blank"> ${element.web_pages[0]}</a></td>
    </tr>
    
    
    `;
  });
}

axios("http://universities.hipolabs.com/search?country=azerbaijan&name=").then(
  (res) => {
    drawTable(res.data);
  }
);
