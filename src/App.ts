import { ICommand } from "./interface/ICommand";
import { InputHandler } from "./InputHandler";

export class App {
  constructor(private inputHandler: InputHandler) {
    this.handleInput = this.handleInput.bind(this);
    this.initHandlers();
  }

  private handleInput(event: KeyboardEvent) {
    const command: ICommand = this.inputHandler.handleInput(event.code);
    command.execute();
  }

  private initHandlers(): void {
    window.addEventListener(
      "keydown",
      (event) => {
        this.handleInput(event);
      },
      true
    );
  }

  public run(): void {
    console.info("[*] Application started...");
  }
}
