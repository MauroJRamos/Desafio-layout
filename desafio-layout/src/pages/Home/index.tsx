import './styles.css';
import MainImage from 'assets/images/car-header.png';
import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className=" home-image-container">
        <img src={MainImage} alt="ImageHome" />
        <div className="home-text-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="home-container-botton">
      <NavLink to="/products" activeClassName="active">
          <ButtonIcon />
        </NavLink>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
