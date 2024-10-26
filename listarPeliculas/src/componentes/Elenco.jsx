import './Elenco.css';
const Elenco = ({ actores, miRef }) => {
    //javascript

    return (
        //jsx
        //Hook con pelicula para que muestre o no el elenco
        <div className='hidden' ref={miRef}>
            <h2>Elenco</h2>

            {actores.map((actor) => (//Guardo en actor los valores solicitados en cada iteracion de cada actor.
                <div id="solouno">
                    <img src={actor.imagen} alt="img_actor" id="img-actor" />
                    <div id="texto">
                        <h4 className="nombre_actor">{actor.nombre}</h4>
                        <p className="biografia">{actor.biografia}</p>
                    </div>
                </div>
            )
            )}
        </div>
    );

};

export default Elenco;