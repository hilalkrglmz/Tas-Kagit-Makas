const buttons = document.querySelectorAll ('button');

const resultEl = document.querySelector('#result');

const playerScoreEl = document.querySelector("#user-score")

const computerScoreEl = document.querySelector("#computer-score")

let playerScore =0;
let computerScore =0;

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const result = playRound(button.id, computerPlay())
        resultEl.textContent = result;        
    });
});

function computerPlay(){
    const choices = [ "rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() *
    choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=== computerSelection){
        return "EŞİTLİK"

    }else if( 

        (playerSelection ==="rock" && computerSelection==="scissors")||
        (playerSelection ==="scissors" && computerSelection==="paper")||
        (playerSelection ==="paper" && computerSelection==="rock") ){ 
            playerScore++;
            playerScoreEl.textContent =playerScore
            return "KAZANDINIZ!!!Seçiminiz:" +" "+  playerSelection + " " + "Bilgisayar Seçimi"+" " + computerSelection
        }
        else{
            computerScore++;
            computerScoreEl.textContent =computerScore
            return "KAYBETTİNİZ :( Bilgisayar seçimi:" +" "+ computerSelection+ " " + "Sizin Seçiminiz:" + " " + playerSelection
        }
    }
