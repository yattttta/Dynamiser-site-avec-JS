$(document).ready(() => {

    //NEW GAME, réinitialisation des scores et cacher les dés
    const newGame = document.getElementById('newGame')
    let scores = [$('#globalScore1'), $('#globalScore2'), $('#currentScore1'), $('#currentScore2')]
    let dice = [$('#dice1'), $('#dice2'), $('#dice3'), $('#dice4'), $('#dice5'), $('#dice6'),$('')]

    function hide() {
        dice.forEach((dices) => {
            dices.hide()
        })
    }
    function restart() {   
        scores.forEach((elements) => {
            elements.html('0')
        })
    }
    newGame.addEventListener('click',hide)
    newGame.addEventListener('click',restart)
    newGame.addEventListener('click', player1)


    //Changement de joueur
    function change1() {
        setTimeout(() => {
            player1() 
        }, 500)
    }
    function change2() {
        setTimeout(() => {
            player2() 
        }, 500) 
        
    }       
        
    //calculer currentScore1 et l'ajouter
    const addCurrentScore1 = document.getElementById('roll')
    function calc1() {           
        let currentScore = parseInt($('#currentScore1').html())
        let random = Math.floor((Math.random() * 6) + 1)
        let i = random - 1
        let result = currentScore + random  
        dice.forEach(function(number) {
            dice[i].show()
            number.hide()     
        })
        //Si le dé fait 1
        if (random > 1) {
            return $('#currentScore1').html(result.toString())
        } else {
            $('#dice1').show()
            $('#currentScore1').html('0')
            change2() 
            addCurrentScore1.removeEventListener('click', calc1)
        }
    }
    
     //Calculer currentScore2 et l'ajouter   
    const addCurrentScore2 = document.getElementById('roll')
    function calc2() {            
        let currentScore = parseInt($('#currentScore2').html())
        let random = Math.floor((Math.random() * 6) + 1)
        let i = random - 1
        let result = currentScore + random  
        dice.forEach(function(number) {
            dice[i].show()
            number.hide()     
        })
        //Si le dé fait 1
        if (random > 1) {
            $('#currentScore2').html(result.toString())
        } else {
            $('#dice1').show()
            $('#currentScore2').html('0')
            change1() 
            addCurrentScore2.removeEventListener('click', calc2)
        }
    }

    //Ajouter currentScore1 à globalScore1    
    const holdScore1 = document.getElementById('hold')
    function hold1() {
        let currentScore = parseInt($('#currentScore1').html())
        let globalScore = parseInt($('#globalScore1').html())
        let calcGlobalScore = currentScore + globalScore
        $('#globalScore1').html(calcGlobalScore.toString())
        $('#currentScore1').html('0')
        change2()      
        }     
    
    //Ajouter currentScore2 à globalScore2         
    const holdScore2 = document.getElementById('hold')      
    function hold2() {               
        let currentScore = parseInt($('#currentScore2').html())
        let globalScore = parseInt($('#globalScore2').html())
        let calcGlobalScore = currentScore + globalScore
        $('#globalScore2').html(calcGlobalScore.toString())
        $('#currentScore2').html('0')
        change1()       
    } 
    
    //Fonction gagnant à 100 points
    function winner() {
        let globalScore1 = parseInt($('#globalScore1').html())
        let globalScore2 = parseInt($('#globalScore2').html())
        if (globalScore1 >= 100) {
            alert('Joueur 1 gagne la partie !')
            hide()
            restart()
            player1()
        } else if (globalScore2 >= 100) {
            alert('Joueur 2 gagne la partie !')
            hide()
            restart()
            player1()
        }
    }
    
    function player1() {
        hide()
        $('#dot1').show()
        $('#dot2').hide() 
        addCurrentScore2.removeEventListener('click',calc2)
        addCurrentScore1.addEventListener('click', calc1) 
        holdScore2.removeEventListener('click', hold2)              
        holdScore1.addEventListener('click', hold1)
        holdScore1.addEventListener('click', hide)
        winner()
    }

    function player2() {      
        hide()
        $('#dot2').show()
        $('#dot1').hide()        
        addCurrentScore1.removeEventListener('click',calc1)
        addCurrentScore2.addEventListener('click', calc2)
        holdScore1.removeEventListener('click', hold1)
        holdScore2.addEventListener('click', hold2)
        holdScore2.addEventListener('click', hide)
        winner()
    }
})    