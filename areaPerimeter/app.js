let submit = document.querySelector(".submit");
submit.addEventListener("click",()=>{
    console.log("Button Was clicked");
    let ops = document.getElementById("operations").value;
    let figure = document.getElementById("figure").value;
    let visiblityArea = document.querySelector(".visiblity");
    let visiblityVolume = document.querySelector(".visiblityVolume");
    if(ops === "Volume" && figure === "Cube"){
        visiblityVolume.classList.add("hidden");
    }
    // else if(ops === "Volume" && figure === "Cuboid")
});