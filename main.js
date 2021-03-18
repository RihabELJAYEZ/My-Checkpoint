
// red heart

var icon = document.getElementsByClassName('topICONitem');
for(var i = 0 ; i < icon.length ; i++){
    icon[i].addEventListener("click" , function(){
     this.classList.toggle("redLIKE") ;
    
     
 })
}





/* supprimer  */ 


var supIcon = document.querySelectorAll(".iconPOB");

for(var i = 0 ; i < supIcon.length ; i++)
{
    supIcon[i].addEventListener("click" , function(e){
      




        
        e.target.parentElement.parentElement.parentElement.remove();

 })
}


 /*  modifier quantite plus */ 
 var btn = document.querySelectorAll(".plus");

 for(let i=0 ; i<btn.length ; i++)
    {
        
        
        btn[i].addEventListener('click', function(){
            
            let c = btn[i].nextElementSibling;
            c.value++ ;
            pricePLUS();
            btn[i].style.color = "green";

        } )
    }
 
 






   /* modifier quantite -- */ 

   var btnM = document.querySelectorAll(".moins");
 
 
   for(let i=0 ; i<btnM.length ; i++)
      {
          
          
          btnM[i].addEventListener('click', function(){
              
              let m = btnM[i].previousElementSibling;
              if (m.value > 0){
                m.value-- ;
                priceMOINS();

              }
              
              btnM[i].style.color = "yellow";
  
          } )
      } 

  


   /* totale add */

   


function pricePLUS(){
    var prixUNT = document.querySelectorAll(".prix");
    var qtARTICLE = document.querySelectorAll(".IDqnt");
    var ToT = 0;
  for(let i=0 ; i<prixUNT.length ; i++)

{
    
      ToT = ToT + prixUNT[i].innerText*qtARTICLE[i].value;
}
   
   document.querySelector(".TotaleF").innerText = ToT;

}  

/*totale moins */ 
function priceMOINS(){
    var prixUNT = document.querySelectorAll(".prix");
    var qtARTICLE = document.querySelectorAll(".IDqnt");
    var ToT = 0;
  for(let i=0 ; i<prixUNT.length ; i++)

{
    
        ToT = ToT - prixUNT[i].innerText*qtARTICLE[i].value;

    
     
}
   
   document.querySelector(".TotaleF").innerText = Math.abs(ToT);

}  







 

   
