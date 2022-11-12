import {InputHandler} from "./InputHandler";
import {ICommand} from "./interface/ICommand";

export class Game {

  public run() {
    this.initHandlers();
  }

  private initHandlers(): void {
    window.addEventListener(
      "keydown",
      (e) => {
        this.handleKeyboardInput(e);
      },
      true
    );

    window.addEventListener(
      'mousedown',
      (e) => {
        this.handleMouseInput(e);
      }
    );
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    })
  }

  private handleKeyboardInput(e: KeyboardEvent) {
    const command: ICommand = this.inputHandler.handleKeyboardInput(e.code);
    command.execute();
  }

  private handleMouseInput(e: MouseEvent) {
    const command: ICommand = this.inputHandler.handleMouseInput(e.button);
    command.execute();
  }

  constructor(private inputHandler: InputHandler) {
    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    this.handleMouseInput = this.handleMouseInput.bind(this);
  }
}
