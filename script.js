'use strict';


const dice = document.querySelector('.dice');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');


let scores, currentScore, activePlayer, playing;



const init = function() {
    scores = [0,0]
    currentScore = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    playing = true;
    activePlayer = 0;

    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}
init ();


// display dice
btnRoll.addEventListener('click', function() {
    if(playing) {
    let number = Math.trunc(Math.random() * 6 ) + 1;
    dice.src=`dice-${Number(number)}.png`;

    if (number !== 1) {
        currentScore += number;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;  
    }
    else {
        //switch play 
        switchPlayer();
        
    }
    
}});

btnHold.addEventListener('click', function() {
    if (playing) {
    scores [activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20){
        playing = false;

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
    }
    else {
        switchPlayer ();
    }
}
});

btnNew.addEventListener('click', init );
