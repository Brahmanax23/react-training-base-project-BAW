export enum CrossAxisAlignment {
  start = "start",
  center = "center",
  end = "end",
  stretch = "stretch",
}

export const crossAxisAlignmentClassMap: Record<CrossAxisAlignment, string> = {
  [CrossAxisAlignment.start]: "items-start",
  [CrossAxisAlignment.center]: "items-center",
  [CrossAxisAlignment.end]: "items-end",
  [CrossAxisAlignment.stretch]: "items-stretch",
};