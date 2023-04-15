//1
let myText="An Array is a collection of items of same data type stored at contiguous memory locations."
let count=0
for (let i=0;i< myText.length; i++) {
if(myText[i]==="A" || myText[i]==="a"){
count++
}    
}
console.log(`There are  ${count} of "a" or "A"`);



//2
let sum=0
const arry1=[1,2,4,5,7,9,13,22]
for( let i=0; i<arry1.length ; i++){
sum +=arry1[i]

}
console.log(sum);

//3
const arry2=[false, 0, 2, true, 23, undefined, 'are u stack?', 'come on']
for( let i=0; i<arry2.length ; i++){
    if (i==0) {
        continue
        
    }
    if(i%2==1){
        console.log(arry2[i]);
    }
}

//4
let newText="";
let text1="How is it going"
for(i=0;i<text1.length; i++){
    if(text1[i]!="i"){
   newText+=text1[i];
    }
}
console.log(newText);

//5
let summ=0;
numbersAry=[2,false ,'5', 'true', 9,0,'1']
for(i=0;i<numbersAry.length;i++){
    if(typeof numbersAry[i]== 'number'){
        summ+=numbersAry[i]
    }
    
}
console.log(summ);
















