import { Navigate, useOutlet } from "react-router-dom"
import { useAuth } from "../../auth_provider/view/AuthProviderContext"
import { Fragment } from "react/jsx-runtime"

export const UnprotectedLayout: React.FC = () => {
  const { user } = useAuth()
  const outlet = useOutlet()

  if (user?.token) {
    return <Navigate to="/workspace" replace />
  }

  return <Fragment>{outlet}</Fragment>
}

export default UnprotectedLayout;

