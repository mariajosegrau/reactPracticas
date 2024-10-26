import React from 'react';

import './Cabecera.css';
import Menu from './Menu.jsx';

const Cabecera = () => {

 
  return (
    <header>
      <h1>Gestión de Películas</h1>
      <Menu />
      
    </header>
  )
}

export default Cabecera;
export { Menu};