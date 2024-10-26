import { useRef } from "react";
import Cartelera from "./Cartelera.jsx";
import Resumen from './Resumen.jsx';
import Elenco from './Elenco.jsx';
import Taquilla from '../agregartaquilla/Taquilla.jsx';
import './Pelicula.css';

//recibe en props todos los parametros que tiene que renderizar.Añado recaudación.
const Pelicula = ({ children, nombre, director, link_cartelera, actores, recaudacion }) => {
    const elencoRef = useRef();   //Hook que vincula con el elemento Elenco
    const taquillaRef = useRef();


    const toggleVisibility = () => {
        elencoRef.current.classList.toggle('hidden');
    };

    const toggleVisibilityTaquilla = () => {
        taquillaRef.current.classList.toggle('hidden');
    };


    return (
        //jsx
        <div className="pelicula">
            <h1>{nombre}</h1>
            <h3>{director}</h3>

            <div className="cartel-resumen">
                <Cartelera link_cartelera={link_cartelera}></Cartelera>
                <Resumen >{children}</Resumen>
            </div>
            <div className="botones-taquilenco">
                <button onClick={toggleVisibility} className="boton-elenco">Elenco</button>
                <button onClick={toggleVisibilityTaquilla} className="boton-taquilla">Taquilla</button>
                <Taquilla taquiRef={taquillaRef} recaudacion={recaudacion}></Taquilla>

            </div>
            <Elenco miRef={elencoRef} actores={actores} ></Elenco>


        </div>
    );

};
export default Pelicula;
