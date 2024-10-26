import React from "react";
import { Routes, Route } from "react-router-dom";
import peliculas from  './../peliculas.json';

import Peliculass from "./componentes/Peliculass.jsx";
import Error from "./Error.jsx";


const Rutas = () => {
    return (
        <>
            <Contenido>
                <Routes>
                    <Route path="/" element={<h1>Contenido Inicial</h1>} />
                    <Route path='/peliculas' element={<Peliculass listado={Peliculass} />} />
                    <Route path="interpretes" element={<Interpretes />} />
                    <Route path="galeria" element={<Galeria />} />
                    <Route path="acerca-de" element={<Acercade />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Contenido>
        </>
    );
};

export default Rutas;