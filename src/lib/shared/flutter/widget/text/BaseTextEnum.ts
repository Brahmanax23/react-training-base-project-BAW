export enum TextOverflow {
  clip = "clip",
  ellipsis = "ellipsis",
  visible = "visible",
}
// enums/FontStyle.ts
export enum FontStyle {
  normal = "normal",
  italic = "italic",
  underline = "underline",
}

// enums/FontWeight.ts
export enum FontWeight {
  thin = 100,
  extraLight = 200,
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
  extraBold = 800,
  black = 900,
}

// enums/TextAlign.ts
export enum TextAlign {
  left = "left",
  center = "center",
  right = "right",
  justify = "justify",
}

export const fontWeightClassMap: Record<FontWeight, string> = {
  [FontWeight.thin]: "font-thin",
  [FontWeight.extraLight]: "font-extralight",
  [FontWeight.light]: "font-light",
  [FontWeight.regular]: "font-normal",
  [FontWeight.medium]: "font-medium",
  [FontWeight.semiBold]: "font-semibold",
  [FontWeight.bold]: "font-bold",
  [FontWeight.extraBold]: "font-extrabold",
  [FontWeight.black]: "font-black",
};

export const overflowClassMap = {
  clip: 'overflow-hidden',
  ellipsis: 'truncate',       // 1 line
  visible: 'overflow-visible',
}

export const textAlignClassMap: Record<TextAlign, string> = {
  [TextAlign.left]: "text-left",
  [TextAlign.center]: "text-center",
  [TextAlign.right]: "text-right",
  [TextAlign.justify]: "text-justify",
};
