// styles/EdgeInsets.ts

export interface EdgeInsetsValue {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export class EdgeInsets {
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;

  private constructor({ top, right, bottom, left }: EdgeInsetsValue) {
    this.top = top ?? 0;
    this.right = right ?? 0;
    this.bottom = bottom ?? 0;
    this.left = left ?? 0;
  }

  /* ================================
   * Flutter-like factories
   * ================================ */

  static all(value: number): EdgeInsets {
    return new EdgeInsets({
      top: value,
      right: value,
      bottom: value,
      left: value,
    });
  }

  static symmetric({
    vertical = 0,
    horizontal = 0,
  }: {
    vertical?: number;
    horizontal?: number;
  }): EdgeInsets {
    return new EdgeInsets({
      top: vertical,
      bottom: vertical,
      left: horizontal,
      right: horizontal,
    });
  }

  static only({
    top = 0,
    right = 0,
    bottom = 0,
    left = 0,
  }: EdgeInsetsValue): EdgeInsets {
    return new EdgeInsets({ top, right, bottom, left });
  }

  static zero: EdgeInsets = new EdgeInsets({});

  /* ================================
   * CSS converters
   * ================================ */

  toPaddingStyle(): React.CSSProperties {
    return {
      paddingTop: this.top,
      paddingRight: this.right,
      paddingBottom: this.bottom,
      paddingLeft: this.left,
    };
  }

  toMarginStyle(): React.CSSProperties {
    return {
      marginTop: this.top,
      marginRight: this.right,
      marginBottom: this.bottom,
      marginLeft: this.left,
    };
  }
}
