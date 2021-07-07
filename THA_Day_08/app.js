main.addEventListener("click",(e)=>{
     let cls=e.target.className;
     if ("sec secred"===cls){
         e.target.classList="sec secwhite";
     }
     else if ("sec secwhite"===cls){
         e.target.classList="sec secred";
     }
})