import './Home.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { toastAlert } from '../../util/toastAlert';
import { useNavigate } from 'react-router-dom';
import homeLogo from '../../assets/img/homeLogo.svg';

function Home() {
    const { user } = useContext(AuthContext)
    const token = user.token;

    let navigate = useNavigate();

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning');
            navigate('/login');
        }
    }, [token]);

    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-slate-900 text-4xl  my-4">Welcome</h1>
                </div>
            </div>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img" />
        </>
    );
}

export default Home;