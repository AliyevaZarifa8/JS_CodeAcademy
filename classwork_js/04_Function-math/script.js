//1
const arry1=['a','b','c','d','e','f','j','k','y','u']

function getRandomLetter(anyArray){
return anyArray[Math.floor(Math.random()*anyArray.length)]
}
console.log(getRandomLetter(arry1));

//2
arry2=[1,2,3,4,14,5,6,8]
function calcSum(anyArray) {    
    let sum=0
    for(let item of anyArray){
       if(item%2==0){
        sum+=item
       }
    }
    return sum

}
console.log(calcSum(arry2));

//3
const arry3=[-3,-5,-9,3,0,true,false,-22]
const  getPositiveNam= function (){
    return Math.sqrt(arry3)
}