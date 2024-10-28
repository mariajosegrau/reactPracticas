import React from 'react';
import Cabecera from './componentes/Cabecera.jsx';
import Pie from './componentes/Pie.jsx';
import Rutas from './componentes/Rutas.jsx';
import Contenido from './componentes/Contenido.jsx';
import Peliculas from './componentes/305TaquillaUseRef/src/componentes/peliculas/Pelicula.jsx';


const App = () => {
  return (
    <div>
      <Cabecera />

      <Rutas />

      <Contenido>
        <Peliculas />
      </Contenido>
      <Pie />
    </div>
  );
};

export default App;
