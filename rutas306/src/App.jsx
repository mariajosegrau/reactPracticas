import { Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio.jsx';
import Contacto from './componentes/Contacto.jsx';
import AcercaDe from './componentes/Acercade.jsx';
import Productos from './componentes/Productos.jsx';
import Menu from './componentes/Menu.jsx';  // Importamos el componente Menu
import Error from './componentes/Error.jsx';

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>

  );
}

export default App;
