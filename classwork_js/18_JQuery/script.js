
/////////////1
const colors=['red','green','blue','yellow','orange','brown']



$("#change").on("click",function(){
    $("#title").each(function(){
        $(this).css('color',colors[Math.floor(Math.random()*colors.length)])
    })
    
});


////////////2
$("#hide").click(function(){
    $("#title").hide();
    });



 $("#show").click(function(){
        $("#title").show();
      });

///////////////3
      $.each( colors, function( key, value ) {
        console.log(value);
      })

/////////////4
     let number= [ 4, 2,false,null,'false',NaN,undefined,8,true,'9' ]
        
      let sum=0
      $.map( number, function( val, i ) {
       if(val){

        sum+=i
    }return sum
})
console.log(sum);