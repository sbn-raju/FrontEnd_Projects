let submit = document.querySelector(".submit");
let answer = document.getElementById("readonly");
submit.addEventListener("click",()=>{
    console.log("Button Was clicked");
    let ops = document.getElementById("operations").value;
    let figure = document.getElementById("figure").value;
    let visiblityArea = document.querySelector(".visiblity");
    let length = document.getElementById("length").value;
    let breath = document.getElementById("breath").value;
    let visiblityVolume = document.querySelector(".visiblityVolume");
    let calculateArea = document.querySelector(".calculateArea");
    let calculateVolume = document.querySelector(".calculateVolume");
    let finalAnswer = 0;
    if(ops === "Volume" && figure === "Cube"){
        visiblityVolume.classList.add("hidden");
        calculateVolume.addEventListener("click",()=>{
            let lengthSide = document.getElementById("volume").value;
            answer.value = lengthSide*lengthSide*lengthSide;
        });
    }
    else if(ops === "Volume" && figure === "Cuboid"){
        visiblityArea.classList.add("hidden");
    }
    else if(ops === "Volume" && figure === "Shape"){
        visiblityVolume.classList.add("hidden");
    }
    else if(ops === "Volume" && figure === "Cone"){
        visiblityArea.classList.add("hidden");
    }
    else{
        visiblityArea.classList.add("hidden");
    }
});