import { Case } from "../../../base/core/Case";
import LoginModel from "./LoginModel";
import LoginWorker from "./LoginWorker";
import { IAuthProviderContext } from "../../layout/auth_provider/view/AuthProviderContext";
import { Reactive } from "../../../util/Reactive";
import { MediaQuery } from "../../../shared/flutter/constant/class/mediaquery/MediaQuery";

export default class LoginViewModel {
  loginState = new Reactive<Case<LoginModel>>(new Case());

  mq = MediaQuery.of();
  isMobile = this.mq.isMobile;
  isTablet = this.mq.isTablet;
  isDesktop = this.mq.isDesktop;

  constructor(auth: IAuthProviderContext) {
    LoginWorker({ model: this, auth: auth });
  }
}
