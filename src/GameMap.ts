import {Unit} from "./Unit";

export class GameMap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  public TILE_SIZE = 20;
  public TILES_X: number;
  public TILES_Y: number;
  public width: number;
  public height: number;
  public DEFAULT_COLOR = "rgb(100, 240, 150)";
  public BORDER_COLOR = "rgb(180, 180, 180)";
  public UNIT_COLOR = "rgb(200, 50, 100)";

  constructor(private unit: Unit) {
    this.canvas = this.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.calculateDimensions();
    this.setColors();
    this.appendToBody();
  }

  public render(): void {
    this.drawMap();
    this.drawBorders();
  }

  public moveUnitLeft(): void {
    this.unit.x += -1;
    if (this.unit.x < 0) {
      this.unit.x = this.TILES_X - this.TILES_X % (this.unit.x * -1) - 1;
    }
  }

  public moveUnitRight(): void {
    this.unit.x += 1;
    if (this.unit.x > this.TILES_X - 1) {
      this.unit.x = this.TILES_X % this.unit.x;
    }
  }

  public moveUnitUp(): void {
    this.unit.y += -1;
    if (this.unit.y < 0) {
      this.unit.y = this.TILES_Y - this.TILES_Y % (this.unit.y * -1) - 1;
    }
  }

  public moveUnitDown(): void {
    this.unit.y += 1;
    if (this.unit.y >= this.TILES_Y) {
      this.unit.y = this.TILES_Y % this.unit.y;
    }
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  private appendToBody(): void {
    document.body.append(this.canvas);
  }

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = 800;
    canvas.height = 600;

    return canvas;
  }

  private drawMap(): void {
    for (let i = 0; i < this.TILES_X; i++) {
      for (let j = 0; j < this.TILES_Y; j++) {
        if (i === this.unit.x && j == this.unit.y) {
          this.setCellColor(this.UNIT_COLOR);
        } else {
          this.setCellColor(this.DEFAULT_COLOR);
        }
        this.ctx.fillRect(i * this.TILE_SIZE, j * this.TILE_SIZE, this.TILE_SIZE, this.TILE_SIZE);
      }
    }
  }

  private drawBorders(): void {
    for (let i = 0; i < this.TILES_X; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.TILE_SIZE - 0.5, 0);
      this.ctx.lineTo(i * this.TILE_SIZE - 0.5, this.height);
      this.ctx.stroke();
    }

    for (let j = 0; j < this.TILES_Y; j++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, j * this.TILE_SIZE - 0.5);
      this.ctx.lineTo(this.width, j * this.TILE_SIZE - 0.5);
      this.ctx.stroke();
    }
  }

  private calculateDimensions(): void {
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.TILES_X = this.width / this.TILE_SIZE;
    this.TILES_Y = this.height / this.TILE_SIZE;
  }

  private setColors(): void {
    this.setCellColor(this.DEFAULT_COLOR);
    this.ctx.strokeStyle = this.BORDER_COLOR;
    this.ctx.lineWidth = 0.5; // retina
  }

  private setCellColor(color: string): void {
    this.ctx.fillStyle = color;
  }
}
