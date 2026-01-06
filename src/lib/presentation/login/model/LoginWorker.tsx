import LoginViewModel from "./LoginViewModel";
import { ErrorCase, SuccessCase } from "../../../base/core/Case";
import { IAuthProviderContext } from "../../layout/auth_provider/view/AuthProviderContext";
import { showDialog } from "../../../util/Functions";
import Listener from "../../../util/Listener";

interface LoginWorkerParams {
  model: LoginViewModel;
  auth: IAuthProviderContext;
}

export default function LoginWorker({ model, auth }: LoginWorkerParams): void {
  Listener({
    listener: () => model.loginState.value,
    callback: (state) => {
      if (state instanceof ErrorCase) {
        showDialog({
          content: (
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "8px",
                maxWidth: "800px",
                width: "90%",
                color: "black",
              }}
            >
              <h1>Error</h1>
              <p>{state.failure?.message ?? ""}</p>

              
            </div>
          ),
        });
      } else if (state instanceof SuccessCase) {
        auth.setLogin(state.data);
      }
    },
  });
}
