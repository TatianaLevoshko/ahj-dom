// TODO: write code here
import Game from "./game";

export default class App {
  static init() {
    this.game = new Game("#game-board");
    this.game.startGame();
  }
}
