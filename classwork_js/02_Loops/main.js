for(i=0 ;i<11 ; i++){
console.log(`${i}* ${i} = ${i*i}`);

}
for(i=0 ;i<11 ; i++){
console.log(`${i}* ${i}  ${i*i} ${i**3} `);

}

let myName = " Zarifa";
for (i = 0; i < myName.length; i++) {
  console.log(myName[i]); 
}

for (i = 0; i <= 8; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (i = 0; i <= 7; i++) {
    if (i == 0) {
      continue
    } 
  if (i % 2 == 0) {
    console.log(`${i} this is number even`);
  }
  if (i % 2 == 1) {
    console.log(`${i} this is number odd`);
  }
}
