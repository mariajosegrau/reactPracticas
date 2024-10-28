import React from "react";
import { Routes, Route } from "react-router-dom";
import pelis from '../assets/peliculas.json';
import Peliculas from "./Peliculas.jsx";
import Error from "./Error.jsx";
import Contenido from "./Contenido.jsx";
import Interpretes from "./Interpretes.jsx";
import Galeria from "./Galeria.jsx";
import Acercade from "./AcercaDe.jsx";


const Rutas = () => {
    return (
        <>
            <Contenido>
                <Routes>
                    <Route path="/" element={<h1>Contenido Inicial</h1>} />
                    <Route path="peliculas" element={<Peliculas pelis={pelis.peliculas} />} />
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