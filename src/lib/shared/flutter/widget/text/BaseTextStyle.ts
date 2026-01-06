// styles/TextStyle.ts

import { FontWeight, FontStyle, fontWeightClassMap } from "./BaseTextEnum";

export interface TextStyleProps {
  fontSize?: number;
  fontWeight?: FontWeight;
  fontFamily?: string;
  fontStyle?: FontStyle;

  color?: string; // ← HEX / RGB / HSL
  colorClass?: string; // ← Tailwind optional

  className?: string;
}

export class TextStyle {
  readonly fontSize?: number;
  readonly fontWeight?: FontWeight;
  readonly fontFamily?: string;
  readonly fontStyle: FontStyle;
  readonly color?: string;
  readonly colorClass?: string;
  readonly className?: string;

  constructor(props: TextStyleProps = {}) {
    this.fontSize = props.fontSize;
    this.fontWeight = props.fontWeight;
    this.fontFamily = props.fontFamily;
    this.fontStyle = props.fontStyle ?? FontStyle.normal;
    this.color = props.color;
    this.colorClass = props.colorClass;
    this.className = props.className;
  }

  toInlineStyle(): React.CSSProperties | undefined {
    const style: React.CSSProperties = {};

    if (this.fontSize) style.fontSize = `${this.fontSize}px`;
    if (this.color) style.color = this.color;

    return Object.keys(style).length ? style : undefined;
  }

  toTailwind(): string {
    const classes: string[] = [];

    if (this.fontWeight) {
      classes.push(fontWeightClassMap[this.fontWeight]);
    }
    if (this.fontFamily) classes.push(this.fontFamily);

    if (this.colorClass) classes.push(this.colorClass);

    switch (this.fontStyle) {
      case FontStyle.italic:
        classes.push("italic");
        break;
      case FontStyle.underline:
        classes.push("underline");
        break;
    }

    if (this.className) classes.push(this.className);

    return classes.join(" ");
  }
}
