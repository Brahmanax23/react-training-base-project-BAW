// components/Container.tsx

import React, { ReactNode } from "react";
import { BoxConstraints } from "../../constant/class/BoxConstraints";
import { BoxDecoration } from "../../constant/class/BoxDecoration";
import { EdgeInsets } from "../../constant/class/EdgeInsets";

export interface ContainerProps {
  id?: string;
  children?: ReactNode;

  width?: number | string;
  height?: number | string;

  padding?: EdgeInsets;
  margin?: EdgeInsets;

  constraints?: BoxConstraints;
  decoration?: BoxDecoration;

  className?: string;
  hidden?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  id,
  children,
  width,
  height,
  padding,
  margin,
  constraints,
  decoration,
  className,
  hidden = false,
}) => {
  const style: React.CSSProperties = {
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
    ...padding?.toPaddingStyle(),
    ...margin?.toMarginStyle(),
    ...constraints?.toStyle(),
    ...decoration?.toStyle(),
  };

  return (
    <div id={id} hidden={hidden} className={className} style={style}>
      {children}
    </div>
  );
};

export default React.memo(Container);
