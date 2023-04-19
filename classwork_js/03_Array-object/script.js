 //1
 const num=[1,2,3,4,5,6,7,8,9,10]    
console.log(num);     
//2  
const common=[1,true,"zarif"]     
console.log(common);      
//3
const genName1=[1,2,3,4,5]
const genName2=genName1
console.log(genName2);
console.log(genName1);

//4
const num2=[1,2,3,4,5,6,7]
num2.push(8,9)
console.log(num2);
//5
const num3=[]
num3.push(5,6,7);
num3.shift();
num3.unshift(2);
console.log(num3);

//6
const general= ["Zarifa","Alieffa", 19, "Quba"]
// general[3]="Qusar"
// console.log(general.at(-1));
general[general.length-1]="Qusar"
console.log(general);

//7
for(let firstask of num)
console.log(firstask);


//8
const obj={
    id:1,
   firstName:"Zarifa",
   lastName:"Alieffa",
   location:"GDU 2"

}
console.log(obj);
//9
const obj2=obj
console.log(obj2);

//10
obj.id=3
console.log(obj);

//11
for(let value in obj){
    console.log(obj[value]);
}

//12
for(let key in obj){
    console.log(key);
}


//13
delete obj.location
obj.location="GDU 3"
console.log(obj);

//14
const newObj=Object.assign(obj)
console.log(newObj);

//15
const obj3={
    firstName:"Zarifa",
    lastName:"Alieffa",
    location:{
      city: "Gence",
      street: "Vary 3"

    }
}
console.log(obj3);

user2=obj3
obj3.location.city="Baku"
console.log(user2);



















