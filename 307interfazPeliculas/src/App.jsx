import React from 'react';
import Cabecera from './componentes/Cabecera.jsx';
import Pie from './componentes/Pie.jsx';
import Rutas from './componentes/Rutas.jsx';
import Contenido from './componentes/Contenido.jsx';
import pelis from '../src/assets/peliculas.json';
import Peliculas from './componentes/Pelicula.jsx';


const App = () => {
  return (
    <div>
      <Cabecera />
      <Peliculas />
      <Rutas />
     
      <Contenido>
        
      </Contenido>
      <Pie />
    </div>
  );
};

export default App;
