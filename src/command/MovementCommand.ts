import {Command} from "./Command";
import {GameMap} from "../GameMap";

export class MovementCommand extends Command {

  constructor(private map: GameMap, private direction: string) {
    super();
  }

  public execute(): void {
    console.log(`[*] Movement command executed: ${this.direction}`);
    switch (this.direction) {
      case 'left':
        this.map.moveUnitLeft();
        break;
      case 'right':
        this.map.moveUnitRight();
        break;
      case 'up':
        this.map.moveUnitUp();
        break;
      case 'down':
        this.map.moveUnitDown();
        break;
    }
  }
}
