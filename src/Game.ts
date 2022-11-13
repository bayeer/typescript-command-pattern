import {InputHandler} from "./InputHandler";
import {ICommand} from "./interface/ICommand";
import {GameMap} from "./GameMap";
import {Unit} from "./Unit";

export class Game {

  private inputHandler: InputHandler;
  private map: GameMap;
  private unit: Unit;

  constructor() {
    this.unit = new Unit(1, 1);
    this.map = new GameMap(this.unit);
    this.inputHandler = new InputHandler(this.map);
  }

  public start(): void {
    this.initHandlers();
    this.initMap();
    this.loop();
  }

  public step(): void {
    // console.log('[*] Game step')
    this.render();
    this.update();
  }

  public loop() {
    this.step();

    setTimeout(() => {
      this.loop();
    }, 100);
  }

  public update(): void {
    //
  }

  public render(): void {
    this.map.clear();

    // Draw Unit
    this.map.render();
  }

  private initMap(): void {
    //
  }

  private initHandlers(): void {
    window.addEventListener(
      "keydown",
      (e) => {
        this.handleKeyboardInput(e);
      },
      true
    );

    window.addEventListener(
      'mousedown',
      (e) => {
        this.handleMouseInput(e);
      }
    );
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    })
  }

  private handleKeyboardInput(e: KeyboardEvent): void {
    const command: ICommand = this.inputHandler.handleKeyboardInput(e.code);
    command.execute();
  }

  private handleMouseInput(e: MouseEvent): void {
    const command: ICommand = this.inputHandler.handleMouseInput(e);
    command.execute();
  }
}
