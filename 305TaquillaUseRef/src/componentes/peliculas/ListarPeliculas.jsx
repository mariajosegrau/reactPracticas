
import Pelicula from './Pelicula.jsx';
//entra directamente el listado de peliculas que contiene peliculas.json
//y no hace falta crear la constante

const ListarPeliculas = ({ peliculas }) => {

    return (
        //devolvemos un elemento
        <>
            {peliculas.map((pelicula, index) => (//devuelve un objeto pelicula en cada iteracion
                <Pelicula
                    nombre={pelicula.nombre || index}
                    director={pelicula.director}
                    link_cartelera={pelicula.cartelera}
                    actores={pelicula.actores}  //
                    recaudacion={pelicula.recaudacion}//incluimos el valor que ha de mostrar el componente Taquilla
                >
                    {pelicula.resumen}
                </Pelicula>//muestra el resumen en children
            ))}
        </>
    );
};

export default ListarPeliculas;