import { Link } from 'react-router-dom';
import './Menu.css';  // Importamos el CSS

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/peliculas">Películas</Link></li>
        <li><Link to="/interpretes">Intérpretes</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/acerca-de">Acerca de</Link></li>
      </ul>
      <h3>Filtrar Películas</h3>
      <ul>
        <li><Link to="/peliculas/titulo">Por Título</Link></li>
        <li><Link to="/peliculas/interprete">Por Intérprete</Link></li>
        <li><Link to="/peliculas/director">Por Director</Link></li>
      </ul>
      <h3>Filtrar Galería</h3>
      <ul>
        <li><Link to="/galeria/titulo">Por Título</Link></li>
        <li><Link to="/galeria/interprete">Por Intérprete</Link></li>
        <li><Link to="/galeria/director">Por Director</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;