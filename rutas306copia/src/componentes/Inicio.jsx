import {useNavigate} from 'react-router-dom';

const Inicio = () => {

    //Hook para redirigir.
    const navigate = useNavigate();

  
    const irInicio = () => {
        navigate('/');
    }   

    return (
        <>
            <h2>Este es el componente de Inicio.</h2>
            {/* <button className ="boton-inicio" onClick={irInicio}>Ir al Inicio</button> */}
        
        </>
    );
};

export default Inicio;