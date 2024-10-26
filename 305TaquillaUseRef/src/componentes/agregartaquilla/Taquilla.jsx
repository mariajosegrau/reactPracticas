import './Taquilla.css';

const Taquilla = (props) => {
    //javascript
    const {recaudacion, taquiRef} = props //entra el valor de recaudación


    return (//Devuelve la recaudación 
        <div ref={taquiRef} className="recaudacion-taquilla">
            {recaudacion}
        </div>

    );

}
export default Taquilla;