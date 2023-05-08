      
async function getAllOrders() {
    try{
    let respon= await fetch("https://northwind.vercel.app/api/orders")
    let data= await respon.json()
       console.log(data);
    }catch(err){
       console.log(err);
    }
}
getAllOrders() 
async function getAllOrders(id) {
    try{
    let respon= await fetch(`https://northwind.vercel.app/api/orders/${id}`)
    let data= await respon.json()
       console.log(data);
    }catch(err){
       console.log(err);
    }
}
getAllOrders(9) 

async function getDeleteOrders(id) {
    try{
    await fetch(`https://northwind.vercel.app/api/orders/${id}`,
  {
    method:"DELETE"
  })
  
    }catch(err){
       console.log(err);
    }
}
getDeleteOrders()


let addBtn=document.querySelector(".add")




