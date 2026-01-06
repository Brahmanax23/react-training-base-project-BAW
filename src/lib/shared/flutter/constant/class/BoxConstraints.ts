// styles/BoxConstraints.ts

export interface BoxConstraintsValue {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

export class BoxConstraints {
  readonly minWidth?: number;
  readonly maxWidth?: number;
  readonly minHeight?: number;
  readonly maxHeight?: number;

  constructor({
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  }: BoxConstraintsValue = {}) {
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }

  static tight(size: { width: number; height: number }): BoxConstraints {
    return new BoxConstraints({
      minWidth: size.width,
      maxWidth: size.width,
      minHeight: size.height,
      maxHeight: size.height,
    });
  }

  static loose(size: { width?: number; height?: number }): BoxConstraints {
    return new BoxConstraints({
      maxWidth: size.width,
      maxHeight: size.height,
    });
  }

  static unbounded = new BoxConstraints();

  toStyle(): React.CSSProperties {
    return {
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
      minHeight: this.minHeight,
      maxHeight: this.maxHeight,
    };
  }
}
