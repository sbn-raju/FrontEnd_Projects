let winnerArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
let turn = true;
let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset-btn");
reset.addEventListener("click",()=>{
    for(let btn of btns){
        btn.innerText = "";
    }
})
for(let btn of btns){
    btn.addEventListener("click",()=>{
        if(turn){
            btn.innerText = "O";
            turn = false;
        }
        else{
            btn.innerText = "X";
            turn = true;
        }
        btn.disabled = true;
        winner();
    })
}
function winner(){
    for(let array of winnerArray){
         let point_one = btns[array[0]].innerText;
         let point_two = btns[array[1]].innerText;
         let point_three = btns[array[2]].innerText;
        //  console.log(btns[point_one].innerText,btns[point_two].innerText,btns[point_three].innerText);
        if(point_one != "" && point_two != "" && point_three !=""){
            if(point_one === point_two && point_two ===point_three){
                console.log("winner",point_one);
            }
        }
    }
}