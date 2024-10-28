import React from "react";
import Pelicula from "./Pelicula.jsx";

const Peliculas = ({ pelis }) => {


  return (
    <>
      <div id='peliculas'>
        {pelis.map((pelis, index) => (//devuelve un objeto pelicula en cada iteracion
          <Pelicula
            nombre={pelis.nombre || index}
            director={pelis.director}
            cartelera={pelis.cartelera}
            actores={pelis.actores}  //
            recaudacion={pelis.recaudacion}//incluimos el valor que ha de mostrar el componente Taquilla
          >
            {pelis.resumen}
          </Pelicula>//muestra el resumen en children
        ))};

      </div>
    </>
  );
};

export default Peliculas;