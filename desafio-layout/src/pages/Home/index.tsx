import './styles.css';
import MainImage from 'assets/images/car-header.png';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-image-container">
            <img src={MainImage} alt="ImageHome" />
            <div className="home-text-container">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>
        <div className="home-card-search">
          <div className="home-container-botton">
          <div>
              <a href="link" className="active">
                <button>botão</button>
              </a>
          </div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;