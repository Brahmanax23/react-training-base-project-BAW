import { NavigateOptions } from "react-router-dom";
import { LocalService } from "../../../../service/LocalService";
import { AuthProviderService } from "../service/AuthProviderService";
import LoginModel from "../../../login/model/LoginModel";

interface AuthProviderControllerParams {
  navigate: (to: string, options?: NavigateOptions) => void;
  service: AuthProviderService;
  local: LocalService;
}

export default class AuthProviderController {
  readonly navigate: (to: string, options?: NavigateOptions) => void;
  readonly service: AuthProviderService;
  readonly local: LocalService;
  private user: LoginModel | null = null;

  constructor({ service, local, navigate }: AuthProviderControllerParams) {
    this.navigate = navigate;
    this.service = service;
    this.local = local;
  }

  init() {
    this.user = this.local.getLogin();
  }

  getUser(): LoginModel | null {
    return this.user;
  }

  setLogin(data: LoginModel & Partial<LoginModel>) {
    this.local.setLogin(data);
    this.user = data;
    this.navigate("/");
  }

  async setLogout() : Promise<void> {
    await this.service.logout({});
    this.local.clear();
    this.user = null;
    this.navigate("/", { replace: true });
  }
}
