import "./App.css";
import Pelicula from './Pelicula.jsx';
import {pelicula} from './pelicula.json'; //importo el atributo pelicula solo

function App() {
  return (
      <Pelicula id="idpelicula" nombre={pelicula.nombre} director={pelicula.director} link_cartelera={pelicula.cartelera} actores={pelicula.actores}>
        {pelicula.resumen}
      </Pelicula>
  );
};

export default App;
