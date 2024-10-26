//import "./App.css";
"use strict";
import ListarPeliculas from './componentes/peliculas/ListarPeliculas.jsx'//Componente para listar las peliculas 
import datospeliculas from './peliculas.json'; //importamos el archivo con los datos a mostrar
import './App.css';

function App () {
  //javascript
  return ( //mostramos los datos de las peliculas utilizando el componente creado ListarPeliculas
    //jsx
    
      <ListarPeliculas peliculas={datospeliculas.peliculas}/>
     
  );
};

export default App;
