import React from "react";
import '../hojas-de-estilo/BotonClear.css'

const BotonClear = (props) => (
    <badge className='badge-secondary' onClick={props.manejarClear}>
        {props.children}
    </badge>
);
    



export default BotonClear;