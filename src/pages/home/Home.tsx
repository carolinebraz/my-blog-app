import { useNavigate, Link } from 'react-router-dom'
import './Home.css';
import homeLogo from '../../assets/homeLogo.svg';

function Home(){
    let navigate = useNavigate()
    return (
        <>
            <h2 className="text-slate-900 text-5xl  m-4">Home</h2>
            <div>

                <button type="submit"
                    className="hover:underline mx-4"
                    onClick={() => { navigate('/login') }}>
                    Login [useNavigate]
                </button>

                <Link to='/login' className="hover:underline mx-4">Login [Link]</Link>

            </div>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;