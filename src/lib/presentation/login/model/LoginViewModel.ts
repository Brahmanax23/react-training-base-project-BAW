import { Case } from "../../../base/core/Case";
import LoginModel from "./LoginModel";
import LoginWorker from "./LoginWorker";
import { IAuthProviderContext } from "../../layout/auth_provider/view/AuthProviderContext";
import { Reactive } from "../../../util/Reactive";

export default class LoginViewModel {
  loginState = new Reactive<Case<LoginModel>>(new Case());

  constructor(auth: IAuthProviderContext) {
    LoginWorker({ model: this, auth: auth });
  }
}
