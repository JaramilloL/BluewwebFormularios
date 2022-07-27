import React from 'react'
import {useRef} from 'react';

const FormNoControlado = () => {
    //usamos useRef para capturar elementos del formulario
    const form = useRef(null);

    const handleSubmit =(e) =>{//preventDefault para no propagar el evento
      e.preventDefault();
      console.log('processing....');
      //obtenemos los valores de los input

      //cramos una nueva instancia del formulario
      const data = new FormData(form.current);

      const dataEntries = Object.fromEntries([...data.entries()]);
      console.log(dataEntries);

      //destructuramos dataEntries
      const {texto, textTarea, seleccion} = dataEntries;

      //validamos los datos
      if(!texto.trim() || !textTarea.trim() || !seleccion.trim()){
          console.log('esta vacio el input');
          return;
      }
      console.log('has llenado correctamente');
  }

  return (
    <>
        <h1>Formularios</h1>

        <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="ingrese un texto" name="texto"/><br/>
            <textarea name="textTarea" placeholder="ingrese un texto"/><br/>
            <select name="seleccion">
                <option name="opcion"></option>
                <option name="noCompletada">No completada</option>
                <option name="completada">Completada</option>
            </select><br/>
            <button type="submit">Guardar</button>
        </form>
    </>
  )
}

export default FormNoControlado