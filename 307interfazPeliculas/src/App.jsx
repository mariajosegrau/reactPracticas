import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera.jsx';
import Contenido from './componentes/Contenido.jsx';
import Pie from './componentes/Pie.jsx';
import Error from './componentes/Error.jsx';
import Peliculas from './componentes/Peliculas.jsx';
import Interpretes from './componentes/Interpretes.jsx';
import Galeria from './componentes/Galeria.jsx';
import AcercaDe from './componentes/AcercaDe.jsx';


const App = () => {
  return (
    <div>
      <Cabecera />
      <Contenido>
        <Routes>
          <Route path="/" element={<h1>Contenido Inicial</h1>} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="interpretes" element={<Interpretes />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="acerca-de" element={<AcercaDe />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Contenido>
     
      <Pie />
    </div>
  );
};

export default App;
