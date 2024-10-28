import React from 'react';
import './Contenido.css';


const Contenido = ({ children }) => {
  return (
    <main className='contenido-container'>
      {children}
      Este es el componente CONTENIDO.
    </main>
  );
};

export default Contenido;