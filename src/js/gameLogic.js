import img from '../img/goblin.png';

export default class GameLogic {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.goblin = document.createElement('img');
    this.goblin.src = img;
    this.currentPos = 0;
    this.score = 0;
    this.loseGoblin = 0;
    this.timeoutID = null;
    this.topScore = window.localStorage.getItem('topScore');

    const arr = document.querySelectorAll('.cell');
    arr.forEach((cell) => cell.addEventListener('click', (ev) => {
      if (this.timeoutID !== null) {
        clearTimeout(this.timeoutID);
        if (ev.target === this.goblin) {
          document.getElementById('current-score').innerText = `${this.score += 1}`;
          this.tryClick();
        } else {
          this.losePoint();
        }
      }
    }));
  }

  generateRandPos() {
    let rand = this.currentPos;
    while (rand === this.currentPos) {
      rand = Math.floor(Math.random() * (this.boardSize ** 2 - 1));
    }
    return rand;
  }

  endGame() {
    this.lose = 0;
    if (this.score > this.topScore) {
      this.topScore = this.score;
      window.localStorage.setItem('topStore', this.topStore);
      document.getElementById('top-score').innerText = this.topScore;
    }
    this.score = 0;
    document.getElementById(`cell${this.currentPos}`).removeChild(this.goblin);
    document.getElementById('btn').classList.toggl('visiable');
    this.timeoutID = null;
  }

  losePoint() {
    this.lose += 1;
    if (this.lose === 5) {
      this.endGame();
    } else {
      window.clearTimeout(this.timeoutID);
      this.tryClick();
    }
  }

  tryClick() {
    this.drawGobin();
    this.timeoutID = window.setTimeout(() => {
      this.losePoint();
    }, 1000);
  }

  drawGoblin() {
    if (this.timeoutID !== null) {
      document.getElementById(`cell${this.currentPos}`).removeChild(this.goblin);
      this.currentPos = this.generateRandPos();
      document.getElementById(`cell${this.currentPos}`).insertAdjacentHTML('afterbegin', this.goblin);
    }
  }
}
