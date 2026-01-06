// styles/BoxDecoration.ts

import { BoxShape } from "../enum/BoxShapeEnum";
import { BorderRadius } from "./BorderRadius";
import { Border } from "./BorderSide";
import { BoxShadow } from "./BoxShadow";

export interface BoxDecorationValue {
  color?: string;
  borderRadius?: BorderRadius;
  boxShadow?: BoxShadow[];
  border?: Border;
  shape?: BoxShape;
}

export class BoxDecoration {
  readonly color?: string;
  readonly borderRadius?: BorderRadius;
  readonly boxShadow?: BoxShadow[];
  readonly border?: Border;
  readonly shape: BoxShape;

  constructor({
    color,
    borderRadius,
    boxShadow,
    border,
    shape = BoxShape.rectangle,
  }: BoxDecorationValue = {}) {
    this.color = color;
    this.borderRadius = borderRadius;
    this.boxShadow = boxShadow;
    this.border = border;
    this.shape = shape;
  }

  toStyle(): React.CSSProperties {
    return {
      backgroundColor: this.color,
      ...(this.shape === BoxShape.circle
        ? { borderRadius: "50%" }
        : this.borderRadius?.toStyle()),
      ...(this.border?.toStyle()),
      boxShadow: this.boxShadow?.map((s) => s.toCss()).join(", "),
    };
  }
}
