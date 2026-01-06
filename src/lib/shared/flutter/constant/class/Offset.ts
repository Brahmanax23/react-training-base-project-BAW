// styles/Offset.ts

export class Offset {
  readonly dx: number;
  readonly dy: number;

  constructor(dx: number, dy: number) {
    this.dx = dx;
    this.dy = dy;
  }

  static zero = new Offset(0, 0);
}
