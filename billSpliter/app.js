let addTip = document.querySelector(".yes");
let noTip = document.querySelector(".no");
let setVisible = document.querySelector(".tip-container");
let getVisible = document.querySelector(".total-container")
let people = document.querySelector(".people");
let amt = document.querySelector(".money");
let msg = document.querySelector(".scriptOp");
let calcAmt = document.querySelector(".cal");
let tipAmt = document.querySelector(".tip");
noTip.addEventListener("click",()=>{
    getVisible.classList.add("getVisible");
})
addTip.addEventListener("click",()=>{
    setVisible.classList.add("setVisible");
    getVisible.classList.add("getVisible");
});
calcAmt.addEventListener("click",(e)=>{
    if(tipAmt.value === ""){
    let totalAmt = parseInt(amt.value)/parseInt(people.value);
    msg.innerHTML = `The amount need to be payed by the single person is ${totalAmt}!! thank you please visit again!!`;}
    else{
        let totalAmt = (parseInt(amt.value) + parseInt(tipAmt.value))/parseInt(people.value);
    msg.innerHTML = `The amount need to be payed by the single person is ${totalAmt}!! thank you please visit again!!`;
    }
})
