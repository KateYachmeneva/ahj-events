export default class Gamedraw {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  draw() {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    let n = 0;
    for (let i = 0; i < this.boardSize; i += 1) {
      const row = document.createElement('div');
      row.className = 'row';
      container.insertAdjacentElement('afterbegin', row);
      for (let j = 0; j < this.boardSize; j += 1) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell${n}`;
        row.insertAdjacentElement('beforeend', cell);
        n += 1;
      }
    }
  }
}
