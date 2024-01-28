    let display = document.querySelector(".display");
    let increase = document.querySelector(".inc");
    let decrease = document.querySelector(".dec");
    let num = 0;
    let reset =document.querySelector(".reset");
    display.value = num;
    reset.addEventListener("click",()=>{
        num = 0;
        display.value = num;
    })
    increase.addEventListener("click",()=>{
        num += 1;
        display.value = num;
         
    })
    decrease.addEventListener("click",()=>{
        num -= 1;
        display.value = num;
    })