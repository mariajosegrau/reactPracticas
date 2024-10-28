import './Elenco.css';
import { generarUuidAleatorio } from '../../biblioteca';
const Elenco = ({ actores, miRef }) => {
    //javascript

    return (
        //jsx
        //Hook con pelicula para que muestre o no el elenco
        <div className='hidden' ref={miRef}>
            <h2>Elenco</h2>

            {actores && actores.length > 0 ? (actores.map((actor) => (  //Guardo en actor los valores solicitados en cada iteracion de cada actor.
                <div key={generarUuidAleatorio()} id="solouno">
                    <img src={actor.imagen} alt="img_actor" className="img-actor" />
                    <div id="texto">
                        <h4 className="nombre_actor">{actor.nombre}</h4>
                        <p className="biografia">{actor.biografia}</p>
                    </div>
                </div>
            ))
            ) : (
                <p>No hay actores disponibles.</p>
            )}
        </div>
    );

};

export default Elenco;