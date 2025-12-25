import { createContext, useContext } from 'react'
import LoginModel from '../../../login/model/LoginModel'

export type IAuthProviderContext = {
  user: LoginModel | null
  setLogin: (d: LoginModel) => void
  setLogout: () => void
}

export const AuthProviderContext = createContext<IAuthProviderContext>({
  user: null,
  setLogin: () => {},
  setLogout: () => {},
})

export const useAuth = () => useContext(AuthProviderContext)