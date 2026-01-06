import { ErrorCase, LoadingCase, SuccessCase } from "../../../base/core/Case";
import { LoginService } from "../service/LoginService";
import LoginViewModel from "../model/LoginViewModel";
import Util from "../../../util/Util";
import StatusResponse from "../../../base/response/StatusResponse";

interface LoginControllerParams {
  model: LoginViewModel;
  service: LoginService;
}

export default class LoginController {
  readonly model: LoginViewModel;
  readonly service: LoginService;

  constructor({ service, model }: LoginControllerParams) {
    this.service = service;
    this.model = model;
  }

  async mock(): Promise<void> {
    this.model.loginState.set(new LoadingCase());
    await Util.delay(300);
    this.model.loginState.set(
      new ErrorCase(new StatusResponse({ message: "MAMAM" }))
    );
  }

  async loginSubmit(): Promise<void> {
    this.model.loginState.set(new LoadingCase());
    const response = await this.service.login({
      username: "",
      password: "",
      rememberMe: "",
    });
    response.fold(
      (error) => this.model.loginState.set(new ErrorCase(error)),
      (result) => this.model.loginState.set(new SuccessCase(result))
    );
  }
}
