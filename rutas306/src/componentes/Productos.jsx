import { useNavigate } from "react-router-dom";

const Productos = () => {

    const permiso = false;
    const navegar = useNavigate();
    return (
        <>
            <p>Pulse para inciar sesión.</p>
            <button
                onClick={() => {
                    permiso ? navegar("/navegar") : navegar("/no-tines-permiso");
                }}
            >
                Comprobar si tiene sesión.
            </button>
        </>
    );
}

export default Productos;
