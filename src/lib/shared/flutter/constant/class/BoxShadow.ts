// styles/BoxShadow.ts

import { Offset } from "./Offset";

export interface BoxShadowValue {
  color: string;
  offset?: Offset;
  blurRadius?: number;
  spreadRadius?: number;
}

export class BoxShadow {
  readonly color: string;
  readonly offset: Offset;
  readonly blurRadius: number;
  readonly spreadRadius: number;

  constructor({
    color,
    offset = Offset.zero,
    blurRadius = 0,
    spreadRadius = 0,
  }: BoxShadowValue) {
    this.color = color;
    this.offset = offset;
    this.blurRadius = blurRadius;
    this.spreadRadius = spreadRadius;
  }

  toCss(): string {
    return `${this.offset.dx}px ${this.offset.dy}px ${this.blurRadius}px ${this.spreadRadius}px ${this.color}`;
  }
}
