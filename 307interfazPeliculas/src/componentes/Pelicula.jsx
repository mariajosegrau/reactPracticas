
import React from 'react';
import './Pelicula.css';
import Actor from './Actor';

    // por children se mostrará el resumen y el resto por parámetro
const Pelicula = ({peli}) => { 
    //desestructuro props
    //const {children, nombre, director, link_cartelera, actores} = props;
  
    return (
        //jsx   
        <div className="pelicula">
            <h1>{peli.nombre}</h1>
            <h3>{peli.director}</h3>
            <div className="cartel-resumen" cartelera={peli.link_cartelera}>
                <div className='resumen-contenedor' >{peli.children}</div>  
            </div>
            <Actor actores={peli.actores}></Actor>
        </div>
    );
};
export default Pelicula;