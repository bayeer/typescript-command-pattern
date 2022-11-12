import { ICommand } from "./interface/ICommand";
import { ExitCommand } from "./command/ExitCommand";
import { MovementCommand } from "./command/MovementCommand";
import { EmptyCommand } from "./command/EmptyCommand";
import { ContextMenuCommand } from "./command/ContextMenuCommand";

export class InputHandler {
  public handleKeyboardInput(keyCode: string): ICommand {
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

  public handleMouseInput(button: number): ICommand {
    switch (button) {
      case 2:
        return new ContextMenuCommand();
    }

    return new EmptyCommand();
  }
}
