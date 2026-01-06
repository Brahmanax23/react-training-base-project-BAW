export enum MainAxisAlignment {
  start = "start",
  center = "center",
  end = "end",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
  spaceEvenly = "spaceEvenly",
}


export const mainAxisAlignmentClassMap: Record<MainAxisAlignment, string> = {
  [MainAxisAlignment.start]: "justify-start",
  [MainAxisAlignment.center]: "justify-center",
  [MainAxisAlignment.end]: "justify-end",
  [MainAxisAlignment.spaceBetween]: "justify-between",
  [MainAxisAlignment.spaceAround]: "justify-around",
  [MainAxisAlignment.spaceEvenly]: "justify-evenly",
};
