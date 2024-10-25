import { useNavigate } from "react-router-dom";

const Productos = () => {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  const navigate = useNavigate();

  const irInicio = () => {
    navigate('/');
  }

  return (
    <>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
      <button onClick={irInicio} className="boton-inicio">Ir a Inicio</button>
    </>
  );
};

export default Productos;