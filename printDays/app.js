let display = document.querySelector("input");
let btns = document.querySelectorAll(".btns");
for(let btn of btns){
    btn.addEventListener("click",()=>{
    let num = parseInt(btn.innerText);
         switch(num){
            case 1:
                display.value = "Monday";
                break;
            case 2:
                display.value = "Tuesday";
                break;
            case 3:
                display.value = "Wednesday";
                break;
            case 4:
                display.value = "Thrusday";
                break;
            case 5:
                display.value = "Friday";
                break;   
            case 6:
                display.value = "Saturday";
                break;
            case 7:
                 display.value = "Sunday";
                break;
        }; 
    });
}
let reset = document.querySelector(".btn");
reset.addEventListener("click",()=>{
    let string =""
    display.value = string;
})