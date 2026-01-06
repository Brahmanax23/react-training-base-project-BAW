// components/Scaffold.tsx
import React from "react";
import { ScaffoldStyle } from "./ScaffoldStyle";
// import PreferredSize from "../preferred_size/PreferredSize";

interface ScaffoldProps {
  value: ScaffoldStyle;
}

//SCAFFOLD CANNOT USE APPBAR BECAUSE IT NEED TO BE INSIDE THE COLUMN, BECAUSE IT WILL
//OVERLAP WITH THE COLUMN UNDER THE SCAFFOLD
const Scaffold = ({ value }: ScaffoldProps) => {
  return (
    <div
    //   className="min-h-screen flex flex-col"
    className="min-h-screen flex flex-col overflow-x-hidden"

      style={{ backgroundColor: value.backgroundColor }}
    >
      {/* AppBar
      {value.appBar && (
        <div className="w-full shrink-0">
          <PreferredSize value={value.appBar} />
        </div>
      )} */}

      {/* Body */}
      <div className="flex-1">{value.body}</div>

      {/* Bottom Navigation */}
      {value.bottomNavigationBar && (
        <div className="fixed bottom-0 left-0 w-full">
          {value.bottomNavigationBar}
        </div>
      )}

      {/* Floating Action Button */}
      {value.floatingActionButton && (
        <div className="fixed bottom-4 right-4">
          {value.floatingActionButton}
        </div>
      )}

      {/* Drawer & BottomSheet nanti */}
    </div>
  );
};

export default React.memo(Scaffold);
