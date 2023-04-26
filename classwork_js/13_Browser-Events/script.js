let form=document.createElement("form")
let label1=document.createElement("label")
let input1=document.createElement("input")
let label2=document.createElement("label")
let input2=document.createElement("input")
let input3=document.createElement("input")
let input4=document.createElement("input")
let input5=document.createElement("input")
let button=document.createElement("button")
let button1=document.createElement("button")
let parag=document.createElement("p")
let time=15


input3.type="checkbox"
input4.type="radio"
input5.type="radio"
button1.type="submit"

input1.required=true
input2.required=true
input3.required=true
input4.required=true






label1.innerHTML="<strong>Name</strong>"
label2.innerHTML="<strong>Surname</strong>"
button1.innerText="Submit"
button.innerText="Let's start..."
parag.innerText=`00: ${time}`




form.style.display="flex"
form.style.margin="10px 0px"
button.style.display="block"
button.style.margin="10px 0px"
form.style.justifyContent='center'
form.style.alignItems='center'
form.style.flexDirection='column'
form.style.height="100vh"
form.style.rowGap="5px"
form.style.border="2px dashed black"
parag.style.border="1px solid "
parag.style.display="inline"
parag.style.padding="3px 5px"
parag.style.margin="20px 0px"
button1.style.padding="5px 10px"
input4.style.accentColor="red"
input5.style.accentColor="red"
input3.style.accentColor="blue"




input1.setAttribute("id","input")
label1.setAttribute("for","input")
input2.setAttribute("id","inp")
label2.setAttribute("for","inp")
input4.setAttribute("name","radio")
input5.setAttribute("name","radio")







document.body.append(button)
document.body.append(parag)
document.body.append(form)
form.append(label1)
form.append(input1)
form.append(label2)
form.append(input2)
form.append(input3)
form.append(input4)
form.append(input5)
form.append(button1)

button1.setAttribute("disabled","")

button.addEventListener("click",function(){
   time=15
   let interval=setInterval(function(){
    button.setAttribute("disabled","");
    time--
    parag.innerText=`00:${time}`
    parag.style.color="blue"
    parag.style.border=" 1px solid blue"
    button1.removeAttribute("disabled")

    if(time==0){
        button.removeAttribute("disabled")
        button1.setAttribute("disabled")
       parag.style.color="red"
       parag.style.border=" 1px solid red"
        clearInterval(interval)
    parag.innerText=`Your missed):`


    }
    
   },100)
})