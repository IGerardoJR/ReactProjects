import React from 'react'
import '../Estilos/Boton.css'

function Boton ({texto, esBotonClic, manejarClic}) {
    return (
        <div className="container">
            <button className={ esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
                onClick={manejarClic}>
                    {texto}
            </button>
        </div>
    )
}

export default Boton;