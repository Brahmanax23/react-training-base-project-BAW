import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../auth_provider/view/AuthProviderContext";
import LoginPage from "../../../login/view/LoginPage";

const ProtectedLayout = () => {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (user?.token !== null || user?.token !== '') {
    return <Navigate to={LoginPage.page} />;
  }
  //   return <LayoutEntry>{outlet}</LayoutEntry>
  return outlet;
};

export default ProtectedLayout;
