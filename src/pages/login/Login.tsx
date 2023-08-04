import './Login.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import UserLogin from '../../models/UserLogin';

function Login() {
    let navigate = useNavigate();

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {} as UserLogin
    );

    const { user, handleLogin, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (user.token !== "") {
            navigate('/home')
        }
    }, [user])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(userLogin)
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
                    <h2 className="text-slate-900 text-5xl ">Login</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="user">Email</label>
                        <input
                            type="text"
                            id="user"
                            name="usuario"
                            placeholder="Email"
                            className="border-2 border-slate-700 rounded p-2"
                            value={userLogin.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="senha"
                            placeholder="Password"
                            className="border-2 border-slate-700 rounded p-2"
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <button type='submit' className="rounded bg-[#110867] hover:bg-[#1904CA] text-white w-1/2 py-2 flex justify-center">
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Login</span>}
                    </button>

                    <hr className="border-slate-800 w-full" />

                    <p>
                        Don't have an account?{' '}
                        <Link to="/register" className="text-indigo-800 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
                <div className="bgLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;