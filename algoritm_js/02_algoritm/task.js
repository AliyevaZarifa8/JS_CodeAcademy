firstName='letleyae'
console.log(firstName.split("e").length-1);
console.log(firstName.split``.reduce((acc,curr)=>curr==='e' ? acc+=1 : acc,0));


function maxChar(str){
    let max=0
    let commonLetter=''
    str.toLowerCase().split``.map((letter)=>{
        if(str.toLowerCase().split(letter).length-1>=max){
            max=str.toLowerCase().split(letter).length-1
            commonLetter=letter
        }
    })
    return commonLetter
}
console.log(maxChar("Leyle"));
console.log(maxChar("Zerife"));
console.log(maxChar("Ulfatuftu"));