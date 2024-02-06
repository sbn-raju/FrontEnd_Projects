//adding white background to the when buttton is clicked//
let resetButton = document.querySelector(".btns");
resetButton.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
});
//Adding colors to each color container
let colors = document.querySelectorAll(".colors");
colors.forEach(color => {
    color.addEventListener("click",()=>{
        let body = document.querySelector("body");
    body.style.backgroundColor = color.innerHTML;
    });
    console.log(color.innerHTML);
});