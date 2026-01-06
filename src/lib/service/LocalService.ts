import LoginModel from "../presentation/login/model/LoginModel";

export abstract class LocalService {
  abstract getLogin(): LoginModel;
  abstract setLogin(login: LoginModel): void;
  abstract clearLogin(): void;
  abstract clear(): void;
}

export class LocalServiceImpl implements LocalService {
  setLogin(login: LoginModel): void {
    const json = JSON.stringify(login.toJson());
    localStorage.setItem("user", json); 
  }

  getLogin(): LoginModel {
    const json = localStorage.getItem("user"); 
    if (json !== null) {
      const map = JSON.parse(json);
      return LoginModel.fromJson(map);
    } else {
      return new LoginModel({});
    }
  }

  clearLogin(): void {
    localStorage.removeItem("user"); 
  }

  clear(): void {
    localStorage.clear(); 
  }
}
