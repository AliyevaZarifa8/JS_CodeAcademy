async function getAllOrders() {
  try {
    let respon = await fetch("https://northwind.vercel.app/api/orders");
    let data = await respon.json();

    data.forEach((element) => {
      let row = document.querySelector(".row");

      row.innerHTML += `
    
        <div class="col-5 me-1 border   p-4 d-flex justify-content-around bg-secondary ms-5 mb-3">
        <div class="me-5">
          <h4>${element.customerId}</h4>
          <h6>${element.shipAddress?.city}</h6>
        </div>
        <div class="ms-5">
          <i class="fa-solid fa-trash-can me-3 text-danger" id="${element.id}"
           onclick=getDeleteOrders(${element.id}) ></i>
          <i class="fa-solid fa-pen-to-square text-success "></i>
        </div>
      </div>
        `;
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getAllOrders();

async function getDeleteOrders(id) {
  try {
    await fetch(`https://northwind.vercel.app/api/orders/${id}`, {
      method: "DELETE",
    });
    getAllOrders();
    console.log(id);
  } catch (err) {
    console.log(err);
  }
}



let form=document.querySelector("form")
let addInput1=document.querySelector("#text")
let  addInput2=document.querySelector("#texts")

form.addEventListener("submit",async function(){

        await fetch(`https://northwind.vercel.app/api/orders`, {
          method: "POST",
          headers:{
            "content-type":"aplication/json"
          },
          body:JSON.stringify({
            customerId:addInput1.value,
            shipAddress:{
               city :addInput2.value
            }

          })

        })
       
})