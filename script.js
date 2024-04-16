const pedraButton = document.getElementById('pedra')
const papelButton = document.getElementById('papel')
const tesouraButton = document.getElementById('tesoura')
const result = document.getElementById('result')
let pontos = 0
const pontosSpan = document.getElementById('pontos')
const jogadaPlayer = document.getElementById('jogadaPlayer')
const computerPlayer = document.getElementById('computerPlayer')

const opcoes = ['pedra', 'papel', 'tesoura']

function computerPlay(){
     const escolhaComputer = opcoes[Math.floor(Math.random()*3)]

    return escolhaComputer
}


function escolhaUser(){

    let playerChoice

    pedraButton.addEventListener('click', ()=>{
         playerChoice = opcoes[0]
         jogadaPlayer.textContent = playerChoice
         whoWin(playerChoice)
    })

    papelButton.addEventListener('click',()=>{
         playerChoice = opcoes[1]
         jogadaPlayer.textContent = playerChoice

         whoWin(playerChoice)
    })

    tesouraButton.addEventListener('click', ()=>{
         playerChoice = opcoes[2]
         jogadaPlayer.textContent = playerChoice
         whoWin(playerChoice)
    })

   

    
}

function whoWin(playerChoice){
    const escolhaComputador = computerPlay()
    computerPlayer.textContent = escolhaComputador
    
    console.log(escolhaComputador)
    
    if (playerChoice === escolhaComputador) {
        result.textContent = 'Empate';
    } else if (
        (playerChoice === opcoes[0] && escolhaComputador === opcoes[2]) ||
        (playerChoice === opcoes[1] && escolhaComputador === opcoes[0]) ||
        (playerChoice === opcoes[2] && escolhaComputador === opcoes[1])
    ) {
        result.textContent = 'Jogador ganhou';
        pontos++;
    } else {
        result.textContent = 'Computador ganhou';
    }

    pontosSpan.textContent = pontos;
}

escolhaUser();


  


