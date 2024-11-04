import React from 'react';
import Pelicula from './Pelicula.jsx';

const Peliculas = (props) => {

    const { peliculas } = props;
    return (

        <div className='peliculas-contenedor'>
            <h1>Listado de películas:</h1>
            {peliculas.map((pelisjson, index) => {
                    <Pelicula key={index}> Titulo: {pelisjson.nombre}</Pelicula>
            }
                   

        )}
        </div>
    )
}

export default Peliculas;