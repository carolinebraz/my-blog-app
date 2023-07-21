import './Home.css';
import homeLogo from '../../assets/homeLogo.svg';

function Home(){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src={homeLogo} alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;