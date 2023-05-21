async function getAllObj() {
  try {
    let respon = await fetch("https://northwind.vercel.app/api/customers");
    let data = await respon.json();

    data.forEach((element) => {
      let row = document.querySelector(".row");

      row.innerHTML += `
    
        <div class="col-5 me-1 border   p-4 d-flex justify-content-around bg-secondary ms-5 mb-3">
        <div class="me-5">
          <h4>${element.contactName}</h4>
          <h6>${element.address?.country}</h6>
        </div>
        <div class="ms-5">
          <i class="fa-solid fa-trash-can me-3 text-danger" id="${element.id}"
           onclick=getDeleteObj("${element.id}") ></i>

           <a href="edit.html?id=${element.id}"> 
             <i class="fa-solid fa-pen-to-square text-success") ></i></a>
       
        </div>
      </div>
        `;
    });
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getAllObj();

async function getDeleteObj(id) {
  try {
    await fetch(`https://northwind.vercel.app/api/customers/${id}`, {
      method: "DELETE",
    });
    getAllObj();
  } catch (err) {
    console.log(err);
  }
}
