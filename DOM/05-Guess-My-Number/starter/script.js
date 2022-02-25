'use strict';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function setMessage(className, message) {
  document.querySelector(`.${className}`).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //document.querySelector('.message').textContent = 'You stupid person guess';
    setMessage('message', 'You stupid person guess');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'You have won';
    setMessage('message', 'You have won');
    highScore = score;
    //document.querySelector('.highscore').textContent = highScore;
    setMessage('highscore', highScore);
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guess > secretNumber) {
    //document.querySelector('.message').textContent = 'To high';
    setMessage('message', 'To high');
    score--;
    //document.querySelector('.score').textContent = score;
    setMessage('score', score);
  } else if (guess < secretNumber) {
    //document.querySelector('.message').textContent = 'To low';
    setMessage('message', 'To low');
    score--;
    //document.querySelector('.score').textContent = score;
    setMessage('score', score);
  }
});

// do again
