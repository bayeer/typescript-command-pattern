import {Command} from "./Command";

export class MouseClickCommand extends Command {
  public execute(): void {
    console.log("[*] Left click is pressed");
  }
}
