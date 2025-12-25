import ErrorPage from "../../presentation/error/ErrorPage";
import LoginPage from "../../presentation/login/view/LoginPage";

const unprotectedRoutes = [
  { path: "/", element: ErrorPage },
  { path: LoginPage.page, element: LoginPage },
];

export default unprotectedRoutes;
