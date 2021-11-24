import './styles.css';


const ButtonSearch = () => {
  return (
    <div className="input-group mb-3 base-card container-main">
    <input className="input form-control" type="search" placeholder="Digite sua busca" aria-label="Search"/>
    <button className="button" type="submit"><h6>BUSCAR</h6></button>
    </div>
  );
};

export default ButtonSearch;
