import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlert } from '../../util/toastAlert';
import icon from '../../assets/icons/icon.png';

function Navbar() {
    const { user, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlert('See you soon', 'info')
    }

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    {user.token !== "" ? (
                        <>
                            <Link to='/home' className="flex title-font font-medium items-center text-gray-900 hover:font-bold mb-4 md:mb-0">
                                <img src={icon} alt="Butterfly Logo" />
                                <span className="ml-3 text-xl">My Blog</span>
                            </Link>
                            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <Link to='/posts' className='mr-5 hover:text-gray-900 hover:font-bold'>Posts</Link>
                                <Link to='/addPost' className='mr-5 hover:text-gray-900 hover:font-bold'>New post</Link>
                                <Link to='/topics' className='mr-5 hover:text-gray-900 hover:font-bold'>Topics</Link>
                                <Link to='/addTopic' className='mr-5 hover:text-gray-900 hover:font-bold'>New topic</Link>
                                <Link to="/profile" className='mr-5 hover:text-gray-900 hover:font-bold'>Profile</Link>
                            </nav>

                            <button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 hover:font-bold rounded text-base mt-4 md:mt-0">
                                Logout
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/' className="flex title-font font-medium items-center text-gray-900 hover:font-bold mb-4 md:mb-0">
                                <img src={icon} alt="Butterfly Logo" />
                                <span className="ml-3 text-xl">My Blog</span>
                            </Link>
                        </>
                    )}
                </div>
            </header>
        </>
    )
}

export default Navbar