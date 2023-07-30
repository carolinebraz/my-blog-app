import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('See you soon')
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
                        <div className='hover:underline'>Profile</div>
                        <Link to='/login' onClick={logout} className='hover:underline'>Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar