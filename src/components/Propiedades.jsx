import React from 'react';

const Propiedades=({propiedad})=>{
    return(
        <>
            <h3>propiedades</h3>
            {propiedad.map((comida,index)=> (<li key={index}>{comida}</li>))}
        </>
    )
}

export default Propiedades;