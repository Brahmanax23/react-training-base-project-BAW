// foundation/Size.ts
export class Size {
  readonly width: number;
  readonly height: number;

  private constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  static fromHeight(height: number): Size {
    return new Size(0, height);
  }

  static fromWidth(width: number): Size {
    return new Size(width, 0);
  }
}
