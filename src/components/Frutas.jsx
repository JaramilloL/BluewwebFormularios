import React from 'react';

const Frutas=()=>{
    const frutas = ['🍈','🍉','🍊','🍋','🍌','🍍'];
    return(
        <>
            <ul>
                {frutas.map((fruta,index)=> <li key={index}>{fruta}</li>)}
            </ul>
        </>
    )
}
export default Frutas;