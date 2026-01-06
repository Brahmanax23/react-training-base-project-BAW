// components/PreferredSize.tsx
import React from "react";
import { PreferredSizeModel } from "./PreferredSizeModel";

interface PreferredSizeProps {
  value: PreferredSizeModel;
}

const PreferredSizeWidget = ({ value }: PreferredSizeProps) => {
  return (
    <div style={{ height: value.preferredSize.height }}>
      {/* readable border */}
      {value.child}
    </div>
  );
};

export default React.memo(PreferredSizeWidget);
