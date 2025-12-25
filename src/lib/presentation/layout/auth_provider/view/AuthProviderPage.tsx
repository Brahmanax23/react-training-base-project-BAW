import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProviderContext } from "./AuthProviderContext";
import LoginModel from "../../../login/model/LoginModel";
import AuthProviderController from "../controller/AuthProviderController";
import { LocalServiceImpl } from "../../../../service/LocalService";
import { AuthProviderServiceImpl } from "../service/AuthProviderService";
import HttpUtilImpl from "../../../../network/HttpUtilImpl";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProviderPage = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<LoginModel | null>(null);
  const navigate = useNavigate();

  const controller = useMemo(() => {
    const service = new AuthProviderServiceImpl({http : new HttpUtilImpl()});
    const local = new LocalServiceImpl();
    return new AuthProviderController({
        local : local,
        service : service,
        navigate : navigate
    });
  }, [navigate]);

  useEffect(() => {
    controller.init();
    setUser(controller.getUser());
  }, [controller]);

  const value = useMemo(
    () => ({
      user,
      setLogin: (d: LoginModel) => {
        controller.setLogin(d);
        setUser(controller.getUser());
      },
      setLogout: () => {
        controller.setLogout();
        setUser(null);
      },
    }),
     [user, controller]
  );

  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  );
};
