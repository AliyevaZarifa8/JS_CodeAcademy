
let userArr = JSON.parse(localStorage.getItem("userArr")) || []
let row = document.querySelector(".row")

function usersList() {
    row.innerHTML = ''
    userArr.forEach(element => {
        const button = document.createElement('button')
        button.style.backgroundColor="red"
        button.style.border="none"
        const box = document.createElement('div')
        // box.setAttribute("class","col  ")
        box.innerHTML = `
        <div class="col col-3">
    <span class="card ">
    <h1 class="text-center">User</h1>
    <p>name:${element.userName}</p>
    <p>email:${element.email} </p>
    </span>
    </div>
    `
        button.innerHTML = 'Delete'
        button.addEventListener('click', () => {
            deleteUser(element.id)
        })
        row.append(box)
        box.append(button)
    });
}

usersList()

function deleteUser(userId) {
    userArr = userArr.filter(el => el.id !== userId)
    localStorage.setItem("userArr", JSON.stringify(userArr))
    usersList()
}