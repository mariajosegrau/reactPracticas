import './Cartelera.css';

const Cartelera = (props) => {//entra la cartelera de la prlicula

    const {link_cartelera} = props;

    return(
        <img src= {link_cartelera} alt="cartel" className="cartelera"/>
    );
};
export default Cartelera;