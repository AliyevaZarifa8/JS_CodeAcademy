const BaseUrl = "https://northwind.vercel.app/api/customers";

let myFormEdit = document.querySelector("#myeditform");
let editInputcntName = document.querySelector("#countNameedit");
let editInputCountry = document.querySelector("#countryedit");

let id = new URLSearchParams(window.location.search).get("id");

axios(`${BaseUrl}/${id}`).then((res) => {
  console.log(res.data);
  editInputcntName.value = res.data.contactName;
  editInputCountry.value = res.data.address?.country;
});


myFormEdit.addEventListener("submit", function (e) {
    console.log(7);
  e.preventDefault();
  let obj = {
    contactName: editInputcntName.value,
    address: {
      country: editInputCountry.value,
    },
  };

  axios.put(`${BaseUrl}/${id}`, obj);

  window.location.href = "index.html";
});
