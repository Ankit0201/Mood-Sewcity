
window.onscroll =  ()=>myFunction();
let widgeet = document.getElementById("widgeet");
let comment = document.getElementById("comment");
let sticky = widgeet.offsetTop;
let commentsec=comment.offsetTop;
console.log(sticky ,commentsec,window.pageYOffset)
const myFunction=() => {
  if (window.pageYOffset > sticky &&  commentsec-90>window.pageYOffset  ) {
    widgeet.classList.add("widgeet");
  } else  {
    widgeet.classList.remove("widgeet");
  }


}
 
let total_price=document.getElementById('total');

const quantity=(quant,price)=>{
  quant=document.getElementById(quant);
   price=document.getElementById(price);
   price1=15 ;
                   
  price.innerHTML= parseInt(price1) * parseInt(quant.value );
 
  console.log("jjj",quant)

  }







  


  


