class App {
  constructor(private inputHandler: MyInputHandler) {
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

window.addEventListener("DOMContentLoaded", () => {
  const inputHandler = new MyInputHandler();
  const app = new App(inputHandler);
  app.run();
});

interface ICommand {
  execute(): void;
}

abstract class Command implements ICommand {
  constructor() {
    this.execute = this.execute.bind(this);
  }

  abstract execute(): void;
}

class ExitCommand implements Command {
  public execute(): void {
    console.log("[*] Exit command executed");
    if (confirm('Are you sure you want to exit?')) {
      window.close();
    }
  }
}

class MovementCommand implements Command {
  private direction: string;

  constructor(direction: string) {
    this.direction = direction;
  }

  public execute(): void {
    console.log(`[*] Movement command executed: ${this.direction}`);
  }
}

class EmptyCommand implements ICommand {
  public execute(): void {
    //
  }
}

class MyInputHandler {
  public handleInput(keyCode: string): ICommand {
    switch (keyCode) {
      case "Escape":
        return new ExitCommand();
      case "KeyA":
        return new MovementCommand("left");
      case "KeyS":
        return new MovementCommand("down");
      case "KeyW":
        return new MovementCommand("up");
      case "KeyD":
        return new MovementCommand("right");
    }
    return new EmptyCommand();
  }
}
