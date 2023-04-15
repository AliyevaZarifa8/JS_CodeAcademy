const arr1=['a','b','c','d','e']
//1
// arr1.splice(1,1);
// console.log(arr1);
//2
// arr1.splice(2,2);
// console.log(arr1);
//3
// arr1.splice(arr1.length-1);
// console.log(arr1);
//4
// arr1.splice(arr1.length-3);
// console.log(arr1);
//5
// arr1.splice(3,0,3,4);
// console.log(arr1);
//6
// arr1.splice(0,2,'A','B');
// console.log(arr1);


///////////////2
arr2=['user1','user2','user3', 11,3,5]
//1
// const newArr=arr2.slice()
// console.log(newArr);
//2
// const newArr=arr2.slice(0,5)
// console.log(newArr);
// const newArr=arr2.slice(2)
// console.log(newArr);


//////////3
const arr3=[1,2,3]
const ary33=[4,5,6]
//1
// let common =arr3.concat(ary33)
// console.log(common);
//2
// let general= arr3.concat(['a','b'])
// console.log(general);
//////////////4
arr4=['name','surname',10,'age','city','uni',80,20]
//1
// arr4.forEach(element => {
//     console.log(element);
// });
//2
// arr4.forEach(element => {
//     typeof element=='number' ?  console.log(element*2):null;
// });
///////////////5
const arr5=[4,5,6,'2',6,true,undefined,'55']
//1
// arr5.map((el)=>{
//     console.log(el);
// })
//2
// arr5.map((el)=>{
//     typeof el=='number' ?  console.log(el*5): console.log(el);; 
// })
//3
//  const result=arr5.map(String)
// console.log(result);
//4
//  const result=arr5.map(Boolean)
// console.log(result);
//5
//  const result=arr5.map(Number)
// console.log(result);

//6
const  mixArray=['1',2,4,'a',false,'9','12','42',undefined,3,true,null]
//  let filtered = mixArray.filter((el) => typeof el === 'number');
//  console.log(filtered);
//  let filtered = mixArray.filter((el) => typeof el === 'string');
//  console.log(filtered);
//  let filtered = mixArray.filter((el) => typeof el === 'boolean');
//  console.log(filtered);
//  let filtered = mixArray.filter((el) => !el );
//  console.log(filtered);

//7
// arr7=[44,3,6,'2',6,true,undefined,'55',null]
// let resulted=arr7.map(Number)
// .filter((el) => typeof el === 'number')


// console.log(resulted);




