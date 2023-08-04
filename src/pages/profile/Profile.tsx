import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlert } from '../../util/toastAlert';
import cover from '../../assets/img/cover.png';
import avatar from '../../assets/img/avatar.png';

function Profile() {
    let navigate = useNavigate()

    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user.token === "") {
            toastAlert('You must be logged in', 'warning')
            navigate("/login")
        }
    }, [user.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
            <img className='w-full h-72 object-cover border-b-8 border-white' src={cover} alt="Cover" />
            {user.foto == "" ? (
                <img src={avatar} alt={`${user.nome} doesn't have a profile picture`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
            ) : (
                <img src={user.foto} alt={`${user.nome}'s profile picture`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
            )
            }
            < div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
                <p>Name: {user.nome} </p>
                <p>Email: {user.usuario}</p>
            </div>
        </div >
    )
}

export default Profile