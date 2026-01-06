import ErrorPage from "../../presentation/error/ErrorPage";

const protectedRoutes = [
    { path: '/', element: ErrorPage, isShow: true },
]

export default protectedRoutes;