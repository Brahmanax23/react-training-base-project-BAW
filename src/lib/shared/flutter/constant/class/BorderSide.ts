// styles/Border.ts

export class BorderSide {
  readonly color: string;
  readonly width: number;

  constructor({
    color,
    width = 1,
  }: {
    color: string;
    width?: number;
  }) {
    this.color = color;
    this.width = width;
  }
}

export class Border {
  readonly side: BorderSide;

  private constructor(side: BorderSide) {
    this.side = side;
  }

  static all({
    color,
    width = 1,
  }: {
    color: string;
    width?: number;
  }): Border {
    return new Border(new BorderSide({ color, width }));
  }

  toStyle(): React.CSSProperties {
    return {
      borderStyle: "solid",
      borderColor: this.side.color,
      borderWidth: this.side.width,
    };
  }
}
