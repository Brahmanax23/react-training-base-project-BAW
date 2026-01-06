// components/BaseRow.tsx

import React, { ReactNode } from "react";
import { CrossAxisAlignment, crossAxisAlignmentClassMap } from "../../constant/enum/CrossAxisAlignment";
import { MainAxisAlignment, mainAxisAlignmentClassMap } from "../../constant/enum/MainAxisAlignment";
import { MainAxisSize, mainAxisSizeClassMap } from "../../constant/enum/MainAxisSize";


/* ================================
 * RowStyle
 * ================================ */

export interface RowStyleProps {
  className?: string;
}

export class RowStyle {
  readonly className?: string;

  constructor(props: RowStyleProps = {}) {
    this.className = props.className;
  }

  toTailwind(): string {
    return this.className ?? "";
  }
}

/* ================================
 * BaseRow
 * ================================ */

export interface BaseRowProps {
  id?: string;
  children?: ReactNode;
  wrap?: boolean;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisSize?: MainAxisSize;

  style?: RowStyle;
  className?: string;
  hidden?: boolean;
}

const BaseRow = ({
  id,
  children,
  wrap = false,
  mainAxisAlignment = MainAxisAlignment.start,
  crossAxisAlignment = CrossAxisAlignment.center,
  mainAxisSize = MainAxisSize.max,
  style,
  className,
  hidden = false,
}: BaseRowProps) => {
  const resolvedStyle = style ?? new RowStyle();

  return (
    <div
      id={id}
      hidden={hidden}
      className={[
        "flex",
        "flex-row",
        "w-full",
        wrap ? "flex-wrap" : "flex-nowrap",
        mainAxisAlignmentClassMap[mainAxisAlignment],
        crossAxisAlignmentClassMap[crossAxisAlignment],
        mainAxisSizeClassMap[mainAxisSize],
        resolvedStyle.toTailwind(),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};


export default React.memo(BaseRow);
