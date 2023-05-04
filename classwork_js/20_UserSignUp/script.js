let usernameInput=document.querySelector("#username")
let emailaddressInput=document.querySelector("#emailaddress")
let passwordInput=document.querySelector("#password")
let checkBox=document.querySelector("#checkbox")
let submitButton=document.querySelector("#submit")
let form=document.querySelector("form")


// submitButton.setAttribute("disabled" ,"true")

function changeSubmit() {
    if(usernameInput.value && emailaddressInput.value && passwordInput.value && checkBox.checked){
        submitButton.removeAttribute("disabled")
    
    }else{
        submitButton.setAttribute("disabled" ,"true")   
    }
}

let userArr=JSON.parse(localStorage.getItem("userArr")) || []
form.addEventListener("submit",function(e){
    e.preventDefault()
    changeSubmit()
    
    let obj={
        id:Date.now(),
        userName: usernameInput.value,
        email:emailaddressInput.value,
        password:passwordInput.value,
        check:checkBox.checked,
    }
userArr.push(obj)
localStorage.setItem("userArr",JSON.stringify(userArr))

window.location.href="http://127.0.0.1:5500/card.html"

})


usernameInput.addEventListener("input",function(){
    changeSubmit()
})
emailaddressInput.addEventListener("input",function(){
    changeSubmit()
})
passwordInput.addEventListener("input",function(){
    changeSubmit()
})
checkBox.addEventListener("input",function(){
    changeSubmit()
})



