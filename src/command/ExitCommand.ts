import { Command } from "./Command";

export class ExitCommand extends Command {
  public execute(): void {
    console.log("[*] Exit command executed");

    if (confirm('Are you sure you want to exit?')) {
      window.close();
    }
  }
}
