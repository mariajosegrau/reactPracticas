import React from 'react';

const Pelicula = (props) => {

  const { nombre, director, cartelera, resumen, actores } = props;
  return (
    <>
      <div className="pelicula-contenedor">
        <h1>{nombre}</h1>
        <h3>Director: {director}</h3>
        <img src={cartelera} alt={`Cartelera ${nombre}`} />
        <p>{resumen}</p>

        <div className="pelicula-actores">
          <h2>Actores:</h2>
          {actores.map((actor, index) => (

            <div key={index} className="actor-info">
              <img src={actor.imagen} alt={actor.nombre} />
              <p>Nombre: {actor.nombre}</p>
              <p>Biografía: {actor.biografia}</p>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Pelicula;