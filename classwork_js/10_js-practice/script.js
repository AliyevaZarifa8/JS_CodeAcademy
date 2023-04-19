//reverse string

//polidrom

//remove dublicated

//generate otp

//find all truth values

///////////////////////////1
// function reversFunc(str) {
//     return str.split("").reverse().join("");
    
// }
// console.log(reversFunc('hello'));
///////////////////////////2
// function polidromFunc(str) {
//   if(str===str.split("").reverse().join("")){
//     return `${str} is polidrom`
//   }else{
//     return `${str} is not polidrom`
//   }
    
// }
// console.log(polidromFunc("refer"));
// console.log(polidromFunc("hello"));

// //second way
// function polidromFunc2(str) {
//    return str===str.split("").reverse().join("")? `yes`:`no`}
//    console.log(polidromFunc2("refer"));
// console.log(polidromFunc2("hello"));

///////////////////////3
// let newAr=[]
// function removeDublicated(anyArrey) {
//  return anyArrey.filter((el, i) =>anyArrey.indexOf(el) === i );
// }
// console.log(removeDublicated([1,2,2,2,3,3,3,4,5,5,6,7]));
// // //second way
// let newArr=[]
// function removeDublicated2(anyArrey) {
//  for(let item of anyArrey){
//     if(!newAr.includes(item)){
//         newAr.push(item)
//     }
  
//  }
//  return newAr
// }
// console.log(removeDublicated2([1,2,2,2,3,3,3,4,5,5,6,7]));
// //third way
// let newArry=[]
// function removeDublicated3(anyArrey) {
//   anyArrey.forEach((el)=>!newArry.includes(el) && newArry.push(el))
//   return newArry;
// }
// console.log(removeDublicated3([1,2,2,2,3,3,3,4,5,5,6,7]));

// //fourth
// function removeDublicated4(anyArrey) {
// return [...new Set(anyArrey)]
//   }  console.log(removeDublicated4([1,2,2,2,3,3,3,4,5,5,6,7]));
//   //fifth
//   let mySet= new Set([1,2,2,2,3,3,3,4,5,5,6,7])
//   console.log([...mySet]);
///////////////////////4
function generateOtp1() {
    let otp=""
    for(i=0;i<4;i++){
otp+=Math.floor(Math.random()*10)
    }
    return otp;
}console.log(generateOtp1());

// //second way
function generateOtp2() {
  let digits="0123456789"
  let otp=""
  for(i=0;i<4;i++){
    otp+=digits[Math.floor(Math.random()*10)]
        }
        return otp;
}
console.log(generateOtp2());

/////////////////////////6
let myArr=[1,4,true ,false, 0,5,"hello",NaN, undefined]
console.log(myArr.filter((Boolean)));
console.log(myArr.filter((el)=>!Boolean(el)));