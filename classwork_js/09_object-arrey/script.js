// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"

function findFirst(anyArrey){
 return anyArrey.map((el,i)=>`${el[0]}`).join("")
}
console.log(findFirst(names1));
console.log(findFirst(names2));
console.log(findFirst(names3));

///// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
 // 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// 2.4.Sort users by age (ascending).
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]
console.log(users.filter((el,i)=>el.uni==="UNEC" && el.surname[0]=="R" ));
console.log(users.filter((el,i)=>el.age=='22' && el.name[0]=="A" ));
console.log(users.map((el,i)=>el.gender=='male' ? ` Mr :${el.name}` :` Ms :${el.name}` ));
console.log(users.map((el,i)=>el.age).sort((a,b)=>a-b));

// 3.Shuffle array////////////////////////////////////////////////////////////////////
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(letters.sort(() => (Math.random() > .5) ? 1 : -1));
console.log(numbers.sort(() => (Math.random() > .5) ? 1 : -1));


