import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';

import './Home.css';
import homeLogo from '../../assets/homeLogo.svg';

function Home() {
    const { name } = useContext(UserContext);
    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <h2 className="text-slate-900 text-5xl  my-4">Home</h2>
                    <h2 className="text-slate-900 text-4xl ">Welcome, {name} (:</h2>
                    <Link to="/login" className="my-4 rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
                        Back to Login
                    </Link>
                </div>
            </div>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img" />
        </>
    );
}

export default Home;