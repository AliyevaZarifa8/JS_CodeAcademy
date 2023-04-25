let header=document.createElement("header")
let nav=document.createElement("nav")
let ul=document.createElement("ul")

let home=document.createElement("li")
let about=document.createElement("li")
let blog=document.createElement("li")
let contact=document.createElement("li")

let section1=document.createElement("section")
let section2=document.createElement("section")
let section3=document.createElement("section")
let section4=document.createElement("section")

document.body.append(header)
header.append(nav)
nav.append(ul)
ul.append(home)
ul.append(about)
ul.append(blog)
ul.append(contact)

document.body.append(section1)
document.body.append(section2)
document.body.append(section3)
document.body.append(section4)


header.style.backgroundColor="black"
header.style.color="white"
ul.style.display="flex"
ul.style.justifyContent='space-around'
ul.style.alignItems='center'

home.style.listStyle="none"
about.style.listStyle="none"
blog.style.listStyle="none"
contact.style.listStyle="none"

ul.style.height="10vh"

home.style.cursor="pointer"
about.style.cursor="pointer"
blog.style.cursor="pointer"
contact.style.cursor="pointer"

section1.style.height="100vh"
section2.style.height="100vh"
section3.style.height="100vh"
section4.style.height="100vh"

section1.style.border="1px dashed black"
section2.style.border="1px dashed black"
section3.style.border="1px dashed black"
section4.style.border="1px dashed black"

section1.style.display="flex"
section1.style.justifyContent='center'
section1.style.alignItems='center'

section2.style.display="flex"
section2.style.justifyContent='center'
section2.style.alignItems='center'

section3.style.display="flex"
section3.style.justifyContent='center'
section3.style.alignItems='center'

section4.style.display="flex"
section4.style.justifyContent='center'
section4.style.alignItems='center'

section1.style.margin="4px 0"
section2.style.margin="4px 0"
section3.style.margin="4px 0"
section4.style.margin="4px 0"


section1.setAttribute("id","sec1")
section2.setAttribute("id","sec2")
section3.setAttribute("id","sec3")
section4.setAttribute("id","sec4")


home.innerHTML="<strong>Home</strong>"
about.innerHTML="<strong>About</strong>"
blog.innerHTML="<strong>Blog</strong>"
contact.innerHTML="<strong>Contact</strong>"

section1.innerHTML="<strong>Home</strong>"
section2.innerHTML="<strong>About</strong>"
section3.innerHTML="<strong>Blog</strong>"
section4.innerHTML="<strong>Contact</strong>"

home.addEventListener("click",function(){
    location="#sec1"
})

about.addEventListener("click",function(){
    window.location.href="#sec2"
})

blog.addEventListener("click",function(){
    document.location="#sec3"
})

contact.addEventListener("click",function(){
    window.location="#sec4"
})



