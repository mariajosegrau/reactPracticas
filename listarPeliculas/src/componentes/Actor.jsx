import './Actor.css';
const Actor = ({actor}) => {//recibe los valores de cada actor(Elenco.jsx).

    return (//devuelve el valor de cada actor del array de actores en pelicula.json.
        <div id="actor"> 
            <img src={actor.imagen} />
            <div id="titulo-contenedor">
                <h3>{actor.nombre}</h3>
                <p>{actor.biografia}</p>
            </div>
        </div>
    );

}
export default Actor;