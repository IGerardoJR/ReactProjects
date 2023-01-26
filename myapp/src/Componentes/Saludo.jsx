import React from 'react';
import '../Styles/Estilo.css'

function Saludo (props) {
    return (
        <div className='contenedor'>
            <h1>Hola que tal, {props.name}</h1>
            <span>Hello World</span>
        </div>
    )
}

export default Saludo;