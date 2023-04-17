//1. Concatenate the following two variables and store it in a "fullStack" variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log("first: ", fullStack);

//2. Find the average age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
function findAverage(anyArrey) {
  let sum = 0;

  anyArrey.forEach((element) => {
    sum += element;
  });

  return sum / anyArrey.length;
}

console.log("second: ", findAverage(ages));

//3. Using countries array console.log following result:
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
// function findCountries(anyArrey) {
//   return anyArrey.map((el,i) =>el=anyArrey.toLocalUpperCase);
// }
// console.log(findCountries(countries));

//4. Find the sum of all indexes of 7.

let numbers = [
  4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
  5, 6, 3, 7, 3, 7,
];
function findNumber(anyArrey) {
  let sum1 = 0;
  anyArrey.filter((el, i) => (el == 7 ? (sum1 += i) : null));
  return sum1;
}
console.log("forth: ", findNumber(numbers));

/////////////////////////////////
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];

//5. Using todos array find all objects that completed property is "true".

function complatedTrue(anyArrey) {
  return anyArrey.filter((el) =>
    el.completed == true ? console.log("first: ", el) : null
  );
}
console.log(complatedTrue(todos));

//6. Using todos array find all objects that title property length is grater than 40.
function findTitle(anyArrey) {
  return anyArrey.filter((el) =>
    el.title.length > 40 ? console.log("sixth", el) : null
  );
}
console.log(complatedTrue(todos));
