import './Resumen.css';
//este componente mostrará lo que se pase por children
//he omitido la constante y he pasado directamente {children} en props
const Resumen = ({children}) => {
   
    return(
        <p>
            {children}
        </p>
        
    );
}
export default Resumen;