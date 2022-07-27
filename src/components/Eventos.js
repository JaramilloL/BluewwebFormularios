import React from 'react';

const Eventos = () => {

    const saludo=(nombre)=> {console.log(`bienvenido: ${ nombre}`)};

    return ( 
        <div>
            <button onClick={()=>{saludo("yo merengues")}}>Dame click</button>
        </div>
     );
}
 
export default Eventos;