import './styles.css';
import ProductCard from 'components/ProductCard';
import Buttonsearch from 'components/Buttonsearch';

const Catalog = () => {
  return (
    <div className="container my-4 ">
      <Buttonsearch/>
      <div className="row ">
        <div className=" col-sm-6 col-lg-4 col-xl-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4 ">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4 ">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
