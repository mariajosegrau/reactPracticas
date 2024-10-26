import Cartelera from "./Cartelera.jsx";
import Resumen from './Resumen.jsx';
import Elenco from './Elenco.jsx';
import './Pelicula.css';
    // por children se mostrará el resumen y el resto por parámetro
const Pelicula = ({ children, nombre, director, link_cartelera, actores }) => { 
    //en esta ocasión no he desectructurado, es lo mismo poner los parámetros directamente, ahorro código
    return (
        //jsx   
        <div className="pelicula">
            <h1>{nombre}</h1>
            <h3>{director}</h3>

            <div className="cartel-resumen">
                <Cartelera link_cartelera={link_cartelera}></Cartelera>
                <Resumen >{children}</Resumen>  
            </div>
            <Elenco actores={actores}></Elenco>

        </div>
    );
};
export default Pelicula;