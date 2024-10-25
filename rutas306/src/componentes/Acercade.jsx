import React from "react";
import {useNavigate} from 'react-router-dom';


const Acercade = () => {

    //Hook para redirigir en este caso a Inicio
    const navigate = useNavigate();

    const irInicio = ()=>{
        navigate('/');
    }

    return (
        <>
            <h1>Iniciando en el mundo de React y sus librerias.</h1>
            <button onClick={irInicio} className="boton-inicio">Ir a Inicio</button>
        </>);
};

export default Acercade;