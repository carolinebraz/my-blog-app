import { createContext, ReactNode, useState } from 'react';
import { login } from '../services/Service';
import { toastAlert } from '../util/toastAlert';
import UserLogin from '../models/UserLogin';

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UserLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUser)
            toastAlert("Successful login", 'success')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlert("Inconsistent user data", 'error')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}