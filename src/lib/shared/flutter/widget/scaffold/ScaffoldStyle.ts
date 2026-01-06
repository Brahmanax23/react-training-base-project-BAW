// layout/Style.ts

// import { PreferredSize } from "../../constant/class/PreferredSize";

export class ScaffoldStyle {
//   readonly appBar?: PreferredSize;
  readonly backgroundColor?: string;
  readonly drawer?: React.ReactNode;
  readonly bottomNavigationBar?: React.ReactNode;
  readonly bottomSheet?: React.ReactNode;
  readonly floatingActionButton?: React.ReactNode;
  readonly body?: React.ReactNode;

  constructor(params: {
    // appBar?: PreferredSize;
    backgroundColor?: string;
    drawer?: React.ReactNode;
    bottomNavigationBar?: React.ReactNode;
    bottomSheet?: React.ReactNode;
    floatingActionButton?: React.ReactNode;
    body?: React.ReactNode;
  }) {
    // this.appBar = params.appBar;
    this.backgroundColor = params.backgroundColor;
    this.drawer = params.drawer;
    this.bottomNavigationBar = params.bottomNavigationBar;
    this.bottomSheet = params.bottomSheet;
    this.floatingActionButton = params.floatingActionButton;
    this.body = params.body;
  }
}
