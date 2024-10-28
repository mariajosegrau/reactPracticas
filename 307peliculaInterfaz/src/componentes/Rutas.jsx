import React from "react";
import { Routes, Route } from "react-router-dom";
import pelis from '../peliculas.json';
import Peliculas from "./305TaquillaUseRef/src/componentes/peliculas/Pelicula.jsx";
import Error from "./Error.jsx";
import Contenido from "./Contenido.jsx";


import Acercade from "./Acercade.jsx";


const Rutas = () => {
    return (
        <>
            <Contenido>
                <Routes>
                    <Route path="/" element={<h1>Contenido Inicial</h1>} />
                    <Route path="peliculas" element={<Peliculas pelis={pelis.peliculas} />} />
                   
                    <Route path="acerca-de" element={<Acercade />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Contenido>
        </>
    );
};

export default Rutas;