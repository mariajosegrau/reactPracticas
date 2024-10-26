import './Cartelera.css';

const Cartelera = (props) => {
//Desectructuro props.
//Esto sería igual que poner {link_cartelera} como parametro y se evitaría el uso de la constante
const {link_cartelera} = props

    return(
        <img src= {link_cartelera} alt="cartel" className="cartelera"/>
    );
};
export default Cartelera;