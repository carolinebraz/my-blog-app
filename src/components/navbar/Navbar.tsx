import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlert } from '../../util/toastAlert';

function Navbar() {

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlert('See you soon', 'info')
    }

    return (
        <>
            <div className='w-full bg-[#190493] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>My blog</Link>

                    <div className='flex gap-4'>
                        <Link to='/posts' className='hover:underline'>Posts</Link>
                        <Link to='/addPost' className='hover:underline'>Add post</Link>
                        <Link to='/topics' className='hover:underline'>Topics</Link>
                        <Link to='/addTopic' className='hover:underline'>Add topic</Link>
                        <Link to='/profile' className='hover:underline'>Profile</Link>
                        <Link to='/login' onClick={logout} className='hover:underline'>Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar