
/******* Solution ********/
var scores, roundscore, activePlayer, gamePlaying, lastDice;

start();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
         //1. generate random number
        var dice1 = Math.floor(Math.random()*6) +1;
        var dice2 = Math.floor(Math.random()*6) +1;
        
        //2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //3. Update the round score if the rolled number isnot 1
        
        if(dice1 != 1 && dice2 != 1){
            //Add Score
            roundscore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundscore; 
        
        }else{
            //Next player
            nextPlayer();
        }
        /*/challange 6 part-1
        if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = 0;
            nextPlayer();
            
            
        }else if(dice > 1){
            //Add Score
            roundscore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        
        }else{
            //Next player
            nextPlayer();
        }
        
        lastDice = dice;
    */
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){ 
        //Add current score to Global score
        scores[activePlayer] += roundscore;

    
        //update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        var input = document.querySelector('.final-score').value; 
        var winningScore;
        
        //check input  value
        //undefined, 0, null or "" are COERCED to false
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
    
        //check if player the Game
        if(scores[activePlayer] >= winningScore){
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
    
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
        
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
            gamePlaying = false;
            roundscore = 0;
        }else{
            //Next player
            nextPlayer();
        }
    }
    
})

function nextPlayer(){
    
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
           
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',start);

function start(){
    
    scores = [0,0]
    roundscore = 0;
    activePlayer = 0;
    lastDice = 0;
    gamePlaying = true;
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}



