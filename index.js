const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => btnClick("Rock"));
paperBtn.addEventListener("click", () => btnClick("Paper"));
scissorsBtn.addEventListener("click", () => btnClick("Scissors"));

let computer;
let player;



resultText.textContent = "";

function btnClick(input){

    player = input;

    //Random num 1-3   (1 = Rock)  (2 = Paper)  (3 = Scissors)
    var randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }

    computerText.textContent = "Computer: " + computer;
    playerText.textContent = "Player: " + input;
    resultText.textContent = checkWinner();
}

function checkWinner(){
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Lose!";
    }
    else if (computer == "Paper") {
        return (player == "Scissors") ? "You Win!" : "You Lose!";
    }
    else if (computer == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Lose!";
    }
}