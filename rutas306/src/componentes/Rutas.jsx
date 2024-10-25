import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Contacto from "./Contacto.jsx";
import Peliculas from "../../../listarPeliculas/src/ListarPeliculas.jsx";
import Error from "./Error.jsx";


const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/peliculas' element={<Peliculas listado={listarPeliculas} />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </>
    );
};

export default Rutas;