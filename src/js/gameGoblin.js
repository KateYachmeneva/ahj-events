import Gamedraw from './gameDraw';
import GameLogic from './gameLogic';

export default class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  startGame() {
    this.field = new Gamedraw(this.boardSize);
    this.field.draw();
    this.game = new GameLogic(this.boardSize);
    const container = document.getElementById('container');
    const localScore = window.localStorage.getItem('topScore');
    this.startBtn = document.createElement('button');
    this.startBtn.id = 'btn';
    this.startBtn.innerText = 'Стартуем';
    this.scores = document.createElement('div');
    this.scores.id = 'scores';
    this.topScore = document.createElement('p');
    this.topScore.innerHTML = `Рекорд: <span id = "top-score">${localScore}</span>`;
    this.currentScore = document.createElement('p');
    this.currentScore.innerHTML = 'Рекорд: <span id = "current-score">0</span>';

    this.scores.insertAdjacentElement('afterbegin', this.topScore);
    this.scores.insertAdjacentElement('afterbegin', this.currentScore);
    container.insertAdjacentElement('beforeend', this.scores);
    container.insertAdjacentElement('beforeend', this.startBtn);
    this.startBtn.classList.add('visiable');
    this.startBtn.addEventListener('click', () => {
      this.startBtn.classList.toggle('visiable');
      document.getElementById('current-score').innerText = 0;
      this.game.tryClick();
    });
  }
}
