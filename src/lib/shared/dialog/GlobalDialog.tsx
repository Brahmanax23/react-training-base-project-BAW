import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type DialogState = {
  content: React.ReactNode;
  onDismiss?: () => void;
  key?: number; // ← Tambahin key
} | null;

let setGlobalDialog: React.Dispatch<React.SetStateAction<DialogState>> | null = null;

const GlobalDialog: React.FC = () => {
  const [dialog, setDialog] = useState<DialogState>(null);

  useEffect(() => {
    setGlobalDialog = setDialog;
    return () => {
      setGlobalDialog = null;
    };
  }, []);

  if (!dialog) return null;

  return createPortal(
    <div
      key={dialog.key} // ← Force re-render dengan key
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={() => {
        dialog.onDismiss?.();
        setDialog(null);
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {dialog.content}
      </div>
    </div>,
    document.body
  );
};

export function showDialogGlobal(state: Exclude<DialogState, null>) {
  if (setGlobalDialog) {
    setGlobalDialog({
      ...state,
      key: Date.now(), // ← Generate unique key
    });
  }
}

export function hideDialogGlobal() {
  if (setGlobalDialog) {
    setGlobalDialog(null);
  }
}

export default GlobalDialog;
