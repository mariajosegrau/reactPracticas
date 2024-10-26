import './Actor.css';
const Actor = (props) => {

    const { imagen, nombre, biografia } = props.datos;
    return (
        <div id="actor">
            <img src={imagen} />
            <div id="titulo-contenedor">
                <h3>{nombre}</h3>
                <p>{biografia}</p>
            </div>
        </div>
    );

}
export default Actor;

/* mio
import './Actor.css';
const Actor = (props) => {

    const {actor} = props;
    return (
        <div id="actor">
            <img src={actor.imagen} />
            <div id="titulo-contenedor">
                <h3>{actor.nombre}</h3>
                <p>{actor.biografia}</p>
            </div>
        </div>
    );

}
export default Actor; */