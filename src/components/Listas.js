import React from 'react';

const Listas = ()=>{
    const frutas = ['🍉','🍊','🍋','🍌','🍍','🍒'];

    return(
    <div>
        <h3>esta es una lista con map</h3>
        {
            frutas.map((fruta,index)=>(<ul key={index}><li>{fruta}</li></ul>))
        }
    </div>
)};

export default Listas;