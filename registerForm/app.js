let btn = document.querySelector(".btns");
let mainForm = document.querySelector(".main-form")
let btnContainer = document.querySelector(".btn-container");
let nameField = document.querySelector(".try");
btn.addEventListener("click",()=>{
         if(nameField.value == ""){
           nameField.classList.toggle("glow-two");
         }
         else{
            mainForm.classList.toggle("setVisiblity")
         }  
});