// ölkə adına görə descending sıra ilə düzün

// area görə ilk 10 ölkə

// populationa gore ilk 10 ölkə

//ingilis dilli ölkeleri

//region asia ve europe olanlar

//birdən çox əsas dili olan ölkələr

//bütün ölkə adlari ve qarsisinda paytaxtı

//dünya əhalisinin sayı

/////////////////////////////1
// console.log(countries_data.sort((a,b)=>b.name.localeCompare(a.name)));
/////////////2
// console.log(countries_data.sort((a,b)=>b.area-a.area).slice(0,10));
////////////////3
// console.log(countries_data.sort((a,b)=>b.population-a.population).slice(0,10));
////////////4
//   console.log(countries_data.filter(el=>el.languages.includes("English")));
///////////5
// console.log(countries_data.filter(el=>el.region==="Asia" || el.region==="Europe"));
/////////6
// console.log(countries_data.filter(el=>el.languages.length>1));
////////////////////7
// console.log(countries_data.map(el=>`${el.capital}:${el.name}`));
/////8
// console.log(countries_data.reduce((acc,curr)=>acc+=curr.population,0));