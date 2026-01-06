export enum MainAxisSize {
  max = "max",
  min = "min",
}

export const mainAxisSizeClassMap: Record<MainAxisSize, string> = {
  [MainAxisSize.max]: "h-full",
  [MainAxisSize.min]: "h-fit",
};