import { IReactionDisposer, reaction } from "mobx";
import { Case, LoadingCase } from "../base/core/Case";
import { hideDialog, showDialog } from "./Functions";
import { Spin } from "antd";

type WorkerCallback<T> = (value: Case<T>) => void;

interface WorkerListenParams<T> {
  listener: () => Case<T>;
  callback: WorkerCallback<T>;
  withLoading?: boolean;
}

export default function Listener<T>({
  listener,
  callback,
  withLoading = true,
}: WorkerListenParams<T>): IReactionDisposer {
  const dispose = reaction(listener, (state) => {
    // Auto show/hide loading
    if (withLoading) {
      if (state instanceof LoadingCase) {
        showDialog({
          content: (
            <div
              style={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spin size="large" />
            </div>
          )
        });
      } else {
        hideDialog();
      }
    }

    // Execute callback
    callback(state);
  });

  return dispose;
}
