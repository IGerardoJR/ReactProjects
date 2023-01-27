// import logo from './logo.svg';
import './App.css';
import Boton from'./Componentes/Boton';
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClic = () => {
    console.log("Click");
    setNumClicks(numClicks + 1);
  }


  const reiniciarContador = () => {
    console.log("Contador reiniciado");
    setNumClicks(0);
  }
  return (
  <div className="App">
    <div className='contenedor-principal'>
      <Contador numClicks={numClicks} />
      <Boton 
      texto='Clic'
      esBotonClic={true}
      manejarClic={manejarClic} />

      <Boton 
      texto='Reiniciar'
      manejarClic={reiniciarContador} />
    </div>
  </div>
  );
}

export default App;
