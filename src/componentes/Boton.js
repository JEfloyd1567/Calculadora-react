import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props){

    const esOperador = valor => {
        return isNaN (valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <badge className={`badge-secondary ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
                onClick={() => props.manejarClic(props.children)}>
                    {props.children}
        </badge>
    );

}


export default Boton;