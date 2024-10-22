import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contacto from './componentes/Contacto.jsx';
import Acercade from './componentes/Acercade.jsx';
import Productos from './componentes/Productos.jsx';
import Inicio from './componentes/Inicio.jsx';



const App = () => {


  return (
    <>
      <h1>¡Bienvenido/a a React!</h1>
      
      
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/acerca-de' element={<Acercade />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/feo' element={<Contacto />} />
         
        </Routes>
     
    </>
  );
};

export default App;
