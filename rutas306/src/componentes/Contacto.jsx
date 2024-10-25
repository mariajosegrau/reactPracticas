import {useNavigate} from 'react-router-dom';

const Contacto = () => {
        //Hook para redirigir
    const navigate = useNavigate();

      //funcion para redirigir a Inicio utilizando Hook.
    const irInicio = () => {
        navigate('/');
    }
    return (
      <div>
        <h1>Contacto</h1>
        <p>Si tienes alguna pregunta, contacta con nosotros en: contacto@ejemplo.com</p>
        <button onClick={irInicio} className='boton-inicio' >Ir a Inicio</button>
      </div>
    );
  };

export default Contacto;