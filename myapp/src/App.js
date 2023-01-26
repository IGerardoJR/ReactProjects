
import './App.css';
import Saludo from './Componentes/Saludo'
import Boton from './Componentes/Boton'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Saludo
      name='Isaias'
      />

      <Boton
      name='Pancho'
      />
    </div>
  );
}

export default App;
