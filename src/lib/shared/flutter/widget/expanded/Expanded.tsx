// components/Expanded.tsx
import React, { ReactNode } from "react";

export interface ExpandedProps {
  children?: ReactNode;
  flex?: number;
  className?: string;
}

const Expanded = ({
  children,
  flex = 1,
  className,
}: ExpandedProps) => {
  return (
    <div
      className={[
        "flex",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        flexGrow: flex,
        flexBasis: 0,
        minHeight: 0,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(Expanded);
