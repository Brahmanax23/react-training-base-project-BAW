// styles/BorderRadius.ts

export interface BorderRadiusValue {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
}

export class BorderRadius {
  readonly topLeft: number;
  readonly topRight: number;
  readonly bottomRight: number;
  readonly bottomLeft: number;

  private constructor({
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
  }: BorderRadiusValue) {
    this.topLeft = topLeft ?? 0;
    this.topRight = topRight ?? 0;
    this.bottomRight = bottomRight ?? 0;
    this.bottomLeft = bottomLeft ?? 0;
  }

  static circular(radius: number): BorderRadius {
    return new BorderRadius({
      topLeft: radius,
      topRight: radius,
      bottomRight: radius,
      bottomLeft: radius,
    });
  }

  static zero = BorderRadius.circular(0);

  toStyle(): React.CSSProperties {
    return {
      borderTopLeftRadius: this.topLeft,
      borderTopRightRadius: this.topRight,
      borderBottomRightRadius: this.bottomRight,
      borderBottomLeftRadius: this.bottomLeft,
    };
  }
}
