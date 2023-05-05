import { Ari_URL } from "./api.js"

///////1
function getAllTodos() {
    fetch(`${Ari_URL}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
getAllTodos() 

/////////////2
function getAllTrueTodos() {
    fetch(`${Ari_URL}`)
        .then((response) => response.json())
        .then((data) => data.filter(el=>el.completed===true))
        .then((complat)=>console.log(complat))
}
getAllTrueTodos() 
//////////////3
function getAlluserTodos() {
    fetch(`${Ari_URL}`)
        .then((response) => response.json())
        .then((data) => data.filter(el=>el.userId==2))
        .then((complat)=>console.log(complat))
}
getAlluserTodos()
//////////////4
function getAllIdTodos(id) {
    fetch(`${Ari_URL}/${id}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
getAllIdTodos(7)