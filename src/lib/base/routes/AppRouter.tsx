import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BaseLayout from "../../presentation/layout/base_layout/view/BaseLayout";
import ErrorPage from "../../presentation/error/ErrorPage";
import UnprotectedLayout from "../../presentation/layout/unprotected_layout/view/UnprotectedLayout";
import unprotectedRoutes from "./UnprotectedRoutes";
import ProtectedLayout from "../../presentation/layout/protected_layout/view/ProtectedLayout";
import protectedRoutes from "./ProtectedRoutes";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<BaseLayout />}
      errorElement={<ErrorPage />}
    >
      <Route element={<UnprotectedLayout />}>
        {unprotectedRoutes.map((res, i) => (
          <Route key={i} path={res.path} element={<res.element />} />
        ))}
      </Route>

      <Route element={<ProtectedLayout />}>
        {protectedRoutes.map(
          (res, i) =>
            res.isShow && (
              <Route key={i} path={res.path} element={<res.element />} />
            )
        )}
      </Route>
    </Route>
  ),
  { basename: import.meta.env.VITE_BASE_PUBLIC_URL }
);

export default appRouter;
