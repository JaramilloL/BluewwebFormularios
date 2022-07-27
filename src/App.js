import './App.css';
import Listas from './components/Listas';
import Eventos from './components/Eventos'
import Frutas from './components/Frutas';
import Propiedades from './components/Propiedades';
import Estados from './components/Estados';
import FormNoControlado from './components/FormNoControlado';
import Formulario from './components/Formulario';

function App() {//definimos un arreglo con frutas

  //definimos una props a utilizar
  const Comida = ['🍕','🍔','🍟','🌭','🍿'];
  return (
    <div className="App-header">
    <h3>Aprendiendo los fundamentos de React</h3>
    <hr/>
      <Listas/>
      <hr/>
      <h3>manejo de eventos</h3>
      <Eventos/>
      <hr/>
      <h3>Componentes</h3>
      <Frutas/>
      <hr/>
      <Propiedades propiedad={Comida}/>
      <hr/>
      <Estados/>
      <hr/>
      <FormNoControlado/>
      <hr/>
      <Formulario/>
    </div>
  );
}

export default App;
