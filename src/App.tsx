import { RouterProvider } from "react-router-dom";
import "./App.css";
import appRouter from "./lib/base/routes/AppRouter";
import GlobalDialog from "./lib/shared/dialog/GlobalDialog";


export default function App() {
    return (
    <>
      {/* Your app */}
      <RouterProvider router={appRouter} />

      {/* Dialog hidup di sini, tapi cuma satu instance */}
      <GlobalDialog />
    </>
  );
}
