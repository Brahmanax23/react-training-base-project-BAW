// components/BaseColumn.tsx

import React, { ReactNode } from "react";
import { CrossAxisAlignment, crossAxisAlignmentClassMap } from "../../constant/enum/CrossAxisAlignment";
import { MainAxisAlignment, mainAxisAlignmentClassMap } from "../../constant/enum/MainAxisAlignment";
import { MainAxisSize, mainAxisSizeClassMap } from "../../constant/enum/MainAxisSize";


/* ================================
 * ColumnStyle
 * ================================ */

export interface ColumnStyleProps {
  className?: string;
}

export class ColumnStyle {
  readonly className?: string;

  constructor(props: ColumnStyleProps = {}) {
    this.className = props.className;
  }

  toTailwind(): string {
    return this.className ?? "";
  }
}

/* ================================
 * BaseColumn
 * ================================ */

export interface BaseColumnProps {
  id?: string;
  children?: ReactNode;

  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisSize?: MainAxisSize;

  style?: ColumnStyle;
  className?: string;
  hidden?: boolean;
}

const BaseColumn = ({
  id,
  children,
  mainAxisAlignment = MainAxisAlignment.start,
  crossAxisAlignment = CrossAxisAlignment.start,
  mainAxisSize = MainAxisSize.max,
  style,
  className,
  hidden = false,
}: BaseColumnProps) => {
  const resolvedStyle = style ?? new ColumnStyle();

  return (
    <div
      id={id}
      hidden={hidden}
      className={[
        "flex flex-col",
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

export default React.memo(BaseColumn);
