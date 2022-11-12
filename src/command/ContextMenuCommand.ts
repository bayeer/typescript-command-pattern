import { Command } from "./Command";

export class ContextMenuCommand extends Command {
  public execute(): void {
    console.log("[*] Right click is pressed");
  }
}
