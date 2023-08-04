import './Home.css';
import homeLogo from '../../assets/img/homeLogo.svg';

function Home() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <h2 className="text-slate-900 text-5xl  my-4">Welcome</h2>
                </div>
            </div>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img" />
        </>
    );
}

export default Home;