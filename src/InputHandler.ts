import { ICommand } from "./interface/ICommand";
import { ExitCommand } from "./command/ExitCommand";
import { MovementCommand } from "./command/MovementCommand";
import { EmptyCommand } from "./command/EmptyCommand";

export class InputHandler {
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
