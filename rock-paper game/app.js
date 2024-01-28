let boxes = document.querySelectorAll(".box");
let userScoreCard = document.querySelector(".user");
let compScoreCard = document.querySelector(".comp");
let userScore = 0;
let compScore = 0;

function compChoice(){
    let compChoice = ["rock","paper","scissor"];
    let choiceNum = Math.floor(Math.random()*3);
    console.log(compChoice[choiceNum]);
    return compChoice[choiceNum];
}

for(let box of boxes){
    box.addEventListener("click",()=>{
        let choiceID = box.getAttribute("id");
        console.log(choiceID);
        let returnChoice = compChoice();
        if(returnChoice === choiceID){
            userScore += 0;
            compScore += 0;
            userScoreCard.innerText = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "paper" && choiceID === "scissor"){
            userScore += 1;
            compScore += 0;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "rock" && choiceID === "paper"){
            userScore += 1;
            compScore += 0;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "scissor" && choiceID === "rock"){
            userScore += 1;
            compScore += 0;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "rock" && choiceID === "scissor"){
            userScore += 0;
            compScore += 1;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "paper" && choiceID === "rock"){
            userScore += 0;
            compScore += 1;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        else if(returnChoice === "scissor" && choiceID === "paper"){
            userScore += 0;
            compScore += 1;
            // console.log(userScore,compScore);
            userScoreCard.innerText  = `User Score is ${userScore}`;
            compScoreCard.innerText = `Computer Score is ${compScore} and computer choice ${returnChoice}`;
        }
        
    });
}