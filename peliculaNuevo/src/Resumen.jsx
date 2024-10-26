import './Resumen.css';
const Resumen = (props) => {

    const {children} = props;
    return(
        <p>
            {children}
        </p>
        
    );
}
export default Resumen;