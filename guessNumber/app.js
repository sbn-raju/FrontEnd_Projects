function findRandom(){
    let random = Math.floor(Math.random() * 10);
    return random;
}
let number = findRandom();
console.log(number);
let btn = document.querySelector(".btn");
let input = document.querySelector(".in");
let box = document.querySelector(".box-container");
let output = document.querySelector(".op");
let btns = document.querySelector(".btns");   
btns.addEventListener("click",(event)=>{
    let num = parseInt(input.value);
    if(num > 10){
        output.value = "Please!! Enter the Number less than 10";
        box.style.backgroundColor = "Red";
    }
    else if(number > num){
        output.value = "Number you guessed is lesser than the value";
    }
    else if(number < num){
        output.value = "Number you guessed is greater than the value";
    }
    else if(num == number){
        output.value = "Hurray You won!!";
        box.style.backgroundColor = "lightgreen";
    }

})
btn.addEventListener("click",()=>{
    let str = "";
    input.value = str;
    output.value = str;
    box.style.backgroundColor = "aqua";
})
 
 


