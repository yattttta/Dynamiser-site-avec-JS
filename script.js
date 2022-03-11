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
        const dice = [$('#dice1'), $('#dice2'), $('#dice3'), $('#dice4'), $('#dice5'), $('#dice6'),$('')]
        let currentScore = parseInt($('#currentScore1').html())
        let random = Math.floor((Math.random() * 6) + 1)
        console.log('random = ' + random)
        let i = random - 1
        console.log('i = ' + i)
       
        
        let result = currentScore + random  
    
        dice.forEach(function(number) {
            dice[i].show()
            number.hide()     
        })
        $('#currentScore1').html(result.toString())
    
    }
    addCurrentScore.addEventListener('click', calc)




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
})    