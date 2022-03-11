$(document).ready(() => {

 //NEW GAME et réinitialisation des scores
const newGame = document.getElementById('newGame')
let scores = [$('#globalScore1'), $('#globalScore2'), $('#currentScore1'), $('#currentScore2')]
function restart() {
    scores.forEach((elements) => {
        elements.html('0')
    })
}
newGame.addEventListener('click', restart)

//Ajouter current score 1
const addCurrentScore = document.getElementById('roll')
function calc() {
    let currentScore = parseInt($('#currentScore1').html())
    let random = Math.floor((Math.random() * 6) + 1)
    let result = currentScore + random
    $('#currentScore1').html(result.toString())
    console.log(random)
}
addCurrentScore.addEventListener('click', calc)
})

//Ajouter current score à global score
const holdScore = document.getElementById('hold')
function hold() {
    let currentScore = parseInt($('#currentScore1').html())
    let globalScore = parseInt($('#globalScore1').html())
    let calcGlobalScore = currentScore + globalScore
    $('#globalScore1').html(calcGlobalScore.toString())
    $('#currentScore1').html('0')
}
holdScore.addEventListener('click', hold)