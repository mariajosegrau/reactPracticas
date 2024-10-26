import './Elenco.css';
const Elenco = (props) => {
    //javascript
    const {actores} = props; //entra el array de actores que contiene pelicula.json
    return (
        //jsx
        <>
            <h2>Elenco</h2>

            {actores.map((actor) => (//guardo en actor los datos que me devuelve actores.map
                <div id="solouno">
                    <img src={actor.imagen} alt="img_actor" id="img-actor" />
                    <div id="texto">
                        <h4 className="nombre_actor">{actor.nombre}</h4>
                        <p className="biografia">{actor.biografia}</p>
                    </div>
                </div>
            )
            )}
        </>
    );

};

export default Elenco;