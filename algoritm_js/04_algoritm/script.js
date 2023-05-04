///////////////////1

// function capitalizeFirst(string) {
//   return string.toLowerCase().split(" ").map((el)=>el[0].toUpperCase()+el.slice(1)).join(" ")
// }
// console.log(capitalizeFirst("Hello my favorit teacher"));

// /////////////////////2

// function enCode(string) {
//    const arr=string.split(" ")
//    return arr.map(el=>el.length>4 ? arr.fill("*").join("") : el).join` `
//  }
//  console.log(enCode("This code is fourty"));

// function enCode(string) {
//    const arr=string.split(" ")
//    return arr.map(el=>el.length>4 ? el.split``.map(item2=>item2.replace(item2,"*")).join(""):el).join(" ")
//  }
//  console.log(enCode("This code is fourty"));

 /////////////////////3

//  function clearFog(str) {
//    let newArr=[]
//    let letter=str.toLowerCase().split("")
//  for (let i= 0; i < letter.length; i++) {
//    if(letter[i]!="f" && letter[i]!="o" && letter[i]!="g" ){
//       return "It is a clear day!"
//     }else{
//         newArr.push(letter)
//     }
 

//   }
   
//  }
 function clearFog(str) {

   return str.match(/[fog]/gi)? str.replace(/[fog]/gi,""): "it is a clear day!"
 }



 console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));
 console.log(clearFog("sky"));
 
