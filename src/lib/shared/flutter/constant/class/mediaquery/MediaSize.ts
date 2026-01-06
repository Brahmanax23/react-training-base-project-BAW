// foundation/MediaSize.ts
export class MediaSize {
  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get shortestSide(): number {
    return Math.min(this.width, this.height);
  }

  get longestSide(): number {
    return Math.max(this.width, this.height);
  }
}
