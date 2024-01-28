let btn = document.querySelector(".btns");

btn.addEventListener('click',()=>{
    console.log("Button Was Clicked");
    let heightValue = document.querySelector(".height").value;
    let weightValue = document.querySelector(".weight").value;
// BMI = weight (kg) / (height (m) * height (m))
    let bmi = weightValue / (heightValue * heightValue);
    let info = document.querySelector(".BMI");
    info.innerText = bmi.toFixed(2)
});