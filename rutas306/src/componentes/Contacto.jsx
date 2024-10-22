import React from "react";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    // Hook para manejar la navegación de forma programática.
    const navegar = useNavigate();
    return (
        <>
            <h2>
                Si necesitas más información, escribe a llllll@rutas.es
            </h2>

            <button onClick={() => {
                // Se navega hacia la ruta "Inicio".
                navegar("/");
            }}
            >
                Volver a inicio.
            </button>
        </>
    );
};

export default Contacto;