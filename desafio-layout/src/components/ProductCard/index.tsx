import './styles.css';

import ProductImg from 'assets/images/car-card.png';
import ButtonBuy from 'components/Buttonbuy';

const ProductCard = () => {
  return (
    <div className=" product-card ">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container ">
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
        <ButtonBuy />
      </div>
    </div>
  );
};

export default ProductCard;
