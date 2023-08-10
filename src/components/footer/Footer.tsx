import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    const { user } = useContext(AuthContext)

    let isLogged

    if (user.token !== "") {
        isLogged = true;
    }

    return (
        <>
            <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {isLogged ? (
                        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-1 md:flex-row">
                            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                                <a href="https://github.com/carolinebraz?tab=repositories" target="_blank" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Projects</a>
                                <a href="mailto:jcarolinebraz@gmail.com" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact me</a>
                            </nav>

                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/carolinebraz" target="_blank">
                                    <img src={linkedin} alt="LinkedIn Logo" className="h-8" />
                                </a>

                                <a href="https://www.github.com/carolinebraz" target="_blank">
                                    <img src={github} alt="GitHub Logo" className="h-8" />
                                </a>

                                <a href="https://www.instagram.com/carolinebraz" target="_blank">
                                    <img src={instagram} alt="Instagram Logo" className="h-8" />
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="py-8 text-center text-sm text-gray-400">&copy; 2023 - Caroline Braz. All rights reserved.</div>
                    )}
                </footer>
            </div>
        </>
    )
}

export default Footer