import React, { useState } from 'react';

const Formulario = () => {

    const [form, setForm] = useState({//valores ininciles en un formulario
        texto: "",
        textTarea: "",
        seleccion: "",
        check: false
    });

    const [error, setError] = useState(false);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        //destructuramos rl form donde vienen los campos name
        const {texto, textTarea, seleccion} = form;

        if(!texto.trim() || !textTarea.trim() || !seleccion.trim()) {
            alert("los campos de texto estan vacios");
            setError(true);
            return;
        }
         alert("bien echo");
         setError(false);
    }
    const handleChange = (e) => {
        const {name, value, checked, type} = e.target;//destructuramos para no escribir e.target 
        setForm({
            ...form, 
            [name] : type === "checkbox" ? checked : value//obtenemos el name de cada input
        });
    }

    const PintarError = () => (
        <div className="alert alert-danger">Error los campos estan vacion o incompletos</div>
    )

  return (
    <>

        {
            error ? <PintarError/> : null
        }

        <h3>Formularios Controlados</h3>

        <form className='p-2 m-2' onSubmit={handleSubmit}>

            <input type="text" placeholder="ingrese un texto" name="texto" 
            onChange={handleChange} value={form.texto}/><br/>

            <textarea name="textTarea" placeholder="ingrese un texto"  
            onChange={handleChange} value={form.textTarea}/><br/>

            <select name="seleccion" 
            onChange={handleChange} value={form.seleccion}>
                <option name="opcion"></option>
                <option name="noCompletada">No completada</option>
                <option name="completada">Completada</option>
            </select><br/>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={form.check} id="flexCheckDefault" name='check' onChecked={handleChange}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
                </div>

            <button type="submit">Guardar</button>
        </form>
    </>
  )
}

export default Formulario