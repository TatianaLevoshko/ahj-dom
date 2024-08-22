export default class Game {
  constructor(boardSelector) {
    this.board = document.querySelector(boardSelector);
    this.cells = [];
    this.goblinImgSrc = require("../assets/goblin.png");
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.board.appendChild(cell);
      this.cells.push(cell);
    }
  }

  startGame() {
    const goblin = document.createElement("img");
    goblin.src = this.goblinImgSrc;
    goblin.classList.add("goblin");

    let currentCell = this.cells[Math.floor(Math.random() * this.cells.length)];
    currentCell.appendChild(goblin);

    this.intervalId = setInterval(() => {
      goblin.classList.add("hidden");

      const randomCellIndex = Math.floor(Math.random() * this.cells.length);
      currentCell = this.cells[randomCellIndex];

      currentCell.appendChild(goblin);
      goblin.classList.remove("hidden");
    }, 1000);
  }
}
