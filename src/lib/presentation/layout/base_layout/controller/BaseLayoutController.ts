import { LocalService } from "../../../../service/LocalService";
import LoginModel from "../../../login/model/LoginModel";

interface BaseLayoutControllerParams {
  local: LocalService;
}

export default class BaseLayoutController {
  readonly local: LocalService;

  constructor({ local }: BaseLayoutControllerParams) {
    this.local = local;
  }

  getUser(): LoginModel {
    return this.local.getLogin();
  }

  isLogin(): boolean {
    return this.getUser().token !== "";
  }
}
