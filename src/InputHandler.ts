import { ICommand } from "./interface/ICommand";
import { ExitCommand } from "./command/ExitCommand";
import { MovementCommand } from "./command/MovementCommand";
import { EmptyCommand } from "./command/EmptyCommand";
import { ContextMenuCommand } from "./command/ContextMenuCommand";
import { MouseClickCommand } from "./command/MouseClickCommand";

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

  public handleMouseInput(e: MouseEvent): ICommand {
    console.log('Mouse pressed', e);
    console.log('button:', e.button, ' which:', e.which);

    switch (e.button) {
      case 0:
        return new MouseClickCommand();
      case 2:
        return new ContextMenuCommand();
    }

    return new EmptyCommand();
  }
}
