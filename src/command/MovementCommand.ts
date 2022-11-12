import { Command } from "./Command";

export class MovementCommand extends Command {
  private readonly direction: string;

  constructor(direction: string) {
    super();
    this.direction = direction;
  }

  public execute(): void {
    console.log(`[*] Movement command executed: ${this.direction}`);
  }
}
