let userName=document.querySelector("#username")


userName.innerText=`Wellcome my favorite user ${localStorage.getItem('userName')}`
