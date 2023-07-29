import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { registerUser } from '../../services/Service';
import User from '../../models/User';
import './Register.css';

function Register() {
    let navigate = useNavigate()

    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        user: '',
        password: '',
        avatar: ''
    })

    const [userResp, setUserResp] = useState<User>({
        id: 0,
        name: '',
        user: '',
        password: '',
        avatar: ''
    })

    useEffect(() => {
        if (userResp.id !== 0) {
            back()
        }
    }, [userResp])

    function back() {
        navigate('/login')
    }

    function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(e.target.value)
    }

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function registerNewUser(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmPassword === user.password && user.password.length >= 8) {

            try {
                await registerUser(`/usuarios/cadastrar`, user, setUserResp)
                alert('Successfully registered user')

            } catch (error) {
                alert('Error registering user')
            }

        } else {
            alert('Inconsistent data. Check registration information.')
            setUser({ ...user, password: "" })
            setConfirmPassword("")
        }
    }


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <div className="bgRegister hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={registerNewUser}>
                    <h2 className='text-slate-900 text-5xl'>Sign up</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="nome"
                            placeholder="Full Name"
                            className="border-2 border-slate-700 rounded p-2"
                            value={user.name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Email</label>
                        <input
                            type="text"
                            id="user"
                            name="usuario"
                            placeholder="Email"
                            className="border-2 border-slate-700 rounded p-2"
                            value={user.user}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Avatar</label>
                        <input
                            type="text"
                            id="avatar"
                            name="foto"
                            placeholder="Avatar"
                            className="border-2 border-slate-700 rounded p-2"
                            value={user.avatar}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="senha"
                            placeholder="Password"
                            className="border-2 border-slate-700 rounded p-2"
                            value={user.password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmarSenha"
                            placeholder="Confirm Password"
                            className="border-2 border-slate-700 rounded p-2"
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmPassword(e)}
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded text-white bg-[#8B008D] hover:bg-[#CB1993] w-1/2 py-2' onClick={back}>
                            Cancel
                        </button>
                        <button className='rounded text-white bg-[#110867] hover:bg-[#1904CA] w-1/2 py-2' type='submit'>
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register