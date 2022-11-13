import {Game} from "./Game";

export class App {
  private game: Game;

  constructor() {
    //
  }

  public run(): void {
    console.info("[*] Application started...");

    this.game = new Game();
    this.game.start();
  }
}
