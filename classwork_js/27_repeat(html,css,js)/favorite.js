let row = document.querySelector(".row");
let favUser = JSON.parse(localStorage.getItem("favUser"));

function getallFav() {
  console.log(favUser);
  row.innerHTML = "";
  favUser.forEach((element) => {
    row.innerHTML += `
        <div class="col-3 p-2">
          <div class="card" style="width: 18rem">
            <img src="${element.photo}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-danger">${element.name} ${element.surname}</h5>
              <hr />
              <p class="card-text">${element.email}.</p>
              <p class="card-text">${element.date}</p>
              <a href="#" class="btn btn-danger" onclick=removeFav("${element.id}")>Remove Fav</a>
            </div>
          </div>
        </div>
        
        `;
  });
}
getallFav();

function removeFav(maId) {
  favUser = favUser.filter((el) => el.id != maId);
  localStorage.setItem("favUser", JSON.stringify(favUser));
  getallFav();
}
