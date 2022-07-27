import React, { useState } from 'react';

const Estados=()=>{
    const [contador, setContador] = useState(0)

    const contar=()=>{
        setContador(contador + 1);
    }
    const disminuir=()=>{
        setContador(contador - 1);
    }
    return(
        <>
            <h3>Estados en React</h3>
            <p>{contador}</p>
            <button onClick={contar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </>
    )
}

export default Estados;