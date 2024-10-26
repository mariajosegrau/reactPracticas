import React from "react";
import './Acercade.css';
import {useNavigate} from 'react-router-dom';


const Acercade = () => {

    //Hook para redirigir en este caso a Inicio
    const navigate = useNavigate();

    const irInicio = ()=>{
        navigate('/');
    }

    return (
        <>
           <div>
      <h2>Acerca de la Aplicación</h2>
      <p>Versión: 1.0</p>
      <p>Creador: María josé Grau Vidal</p>
      <p>Fecha de modificación: Octubre 2024</p>
    </div>
        </>);
};

export default Acercade;