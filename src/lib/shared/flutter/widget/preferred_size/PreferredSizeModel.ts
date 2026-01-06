// layout/PreferredSize.ts

import { Size } from "../../constant/class/Size";

export class PreferredSizeModel {
  readonly preferredSize: Size;
  readonly child: React.ReactNode;

  constructor(params: { preferredSize: Size; child: React.ReactNode }) {
    this.preferredSize = params.preferredSize;
    this.child = params.child;
  }
}
