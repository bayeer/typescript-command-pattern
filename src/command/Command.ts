import { ICommand } from "../interface/ICommand";

export abstract class Command implements ICommand {
  constructor() {
    this.execute = this.execute.bind(this);
  }

  abstract execute(): void;
}
