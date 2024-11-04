
import React from 'react';
import './App.css';
import pelisjson from './peliculas.json';
import Peliculas from './componentes/Peliculas.jsx';

function App(props) {
  const { pelisjson } = props;

  return (
    <>
      <Peliculas pelis={pelisjson.peliculas} />
       
    </>
  );
}

export default App;