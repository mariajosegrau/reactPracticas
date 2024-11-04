import { Routes, Route } from 'react-router-dom';
import Inicio from './rutas/Inicio.jsx';
import Contacto from './rutas/Contacto.jsx';
import AcercaDe from './rutas/Acercade.jsx';
import Productos from './rutas/Productos.jsx';
import Error from './rutas/Error.jsx';

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/acercade" element={<AcercaDe />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default Rutas;