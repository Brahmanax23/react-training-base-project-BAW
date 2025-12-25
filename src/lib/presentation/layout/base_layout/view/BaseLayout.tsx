import { Suspense } from "react";
import { Await, Navigate, useLocation, useOutlet } from "react-router";
import { AuthProviderPage } from "../../auth_provider/view/AuthProviderPage";
import LoginPage from "../../../login/view/LoginPage";
import Util from "../../../../util/Util";

const BaseLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to={LoginPage.page} />;
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-[100vh] w-full items-center justify-center">
          <img
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=22`}
            alt="logo"
            className="animate-heartBeat"
          />
        </div>
      }
    >
      <Await
        resolve={Util.delay(300)}
        children={() => <AuthProviderPage>{outlet}</AuthProviderPage>}
      />
    </Suspense>
  );
};

export default BaseLayout;
