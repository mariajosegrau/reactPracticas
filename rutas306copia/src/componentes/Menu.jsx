import { Link } from 'react-router-dom';
import './Menu.css';  // Importamos el CSS

const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/acercade">Acerca De</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;