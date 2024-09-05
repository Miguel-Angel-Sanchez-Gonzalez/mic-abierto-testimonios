import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombreRapero}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='aka-testimonio'><strong>{props.aka}</strong>  </p>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='texto-testimonio'>{props.rima}<strong>{props.punchline}</strong>  </p>
      </div>        
    </div>
  );      
}

export default Testimonio;