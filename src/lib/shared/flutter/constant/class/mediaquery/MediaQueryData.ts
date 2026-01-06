// foundation/MediaQueryData.ts
import { Orientation } from "../../enum/Orientation";
import { EdgeInsets } from "../EdgeInsets";
import { MediaSize } from "./MediaSize";


export class MediaQueryData {
  readonly size: MediaSize;
  readonly devicePixelRatio: number;
  readonly orientation: Orientation;
  readonly padding: EdgeInsets;
  readonly viewInsets: EdgeInsets;

  constructor(params: {
    size: MediaSize;
    devicePixelRatio: number;
    orientation: Orientation;
    padding?: EdgeInsets;
    viewInsets?: EdgeInsets;
  }) {
    this.size = params.size;
    this.devicePixelRatio = params.devicePixelRatio;
    this.orientation = params.orientation;
    this.padding = params.padding ?? EdgeInsets.zero;
    this.viewInsets = params.viewInsets ?? EdgeInsets.zero;
  }

  /* ================================
   * Helper (Flutter-like)
   * ================================ */

  get isPortrait(): boolean {
    return this.orientation === Orientation.portrait;
  }

  get isLandscape(): boolean {
    return this.orientation === Orientation.landscape;
  }

  get isMobile(): boolean {
    return this.size.shortestSide < 600;
  }

  get isTablet(): boolean {
    return this.size.shortestSide >= 600 && this.size.shortestSide < 1024;
  }

  get isDesktop(): boolean {
    return this.size.shortestSide >= 1024;
  }
}
