const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const compImg = document.getElementById("comp-img");
const playerImg = document.getElementById("player-img");
const removeClass = document.querySelectorAll(".rem")

const playerDisplay = document.getElementById("left-score")
const compDisplay = document.getElementById("right-score")

const buttons = document.getElementById("player-buttons")

const res = document.querySelector(".result")

const removeButtons = document.querySelector(".play")

const playAgain = document.getElementById("play-again-button");
const wonText = document.getElementById("won-text");

let playerScore = 0;
let compScore = 0;

let playerSelection = 0;
let compSelection = 0;


function imgVisible(){
    removeClass.forEach(element => {
        element.classList.remove("remove");
    });
}

function random(){
    let num = Math.round(Math.random()*3)
    if(num==1 && playerSelection!=1){
        compSelection=1;
        compImg.src = `../assets/rock-hand.png`;
    }
    else if(num==2 && playerSelection!=2){
        compSelection=2;
        compImg.src = `../assets/paper-hand.png`;
    }
    else if(num==3 && playerSelection!=3){
        compSelection=3;
        compImg.src = `../assets/scissors-hand.png`;
    }
    else{
        random();
    }

    winChecker();
}

function winChecker(){
    if(playerSelection==1){
        if(compSelection==2){
            compWin()
        }
        else{
                playerWin()
            }
    }

    else if(playerSelection==2){
        if(compSelection==3){
            compWin()
        }
        else{
                playerWin()
            }
    }

    if(playerSelection==3){
        if(compSelection==1){
            compWin()
        }
        else{
                playerWin()
            }
    }
}

function playerWin(){
    playerScore++;
    playerDisplay.innerHTML=playerScore;
    result();
}

function compWin(){
    compScore++;
    compDisplay.innerHTML=compScore;
    result();
}

function result(){
    compSelection=0;
    playerSelection=0;

    if(playerScore==5){
        wonText.innerHTML = "You won the game";
        removeButtons.classList.toggle("hidden")
        res.classList.toggle("hidden")
        
    }
    else if(compScore==5){
        wonText.innerHTML = "Computer won the game";
        removeButtons.classList.toggle("hidden")
        res.classList.toggle("hidden")
        
    }
}


rock.onclick = () => {
    playerImg.src = `../assets/rock-hand.png`
    imgVisible()
    playerSelection = 1
    random()
}

paper.onclick = () => {
    playerImg.src = `../assets/paper-hand.png`
    imgVisible()
    playerSelection = 2
    random()
}

scissor.onclick = () => {
    playerImg.src = `../assets/scissors-hand.png`
    imgVisible()
    playerSelection = 3
    random()
}


playAgain.onclick = () => {
    location.href = "game.html";
}
