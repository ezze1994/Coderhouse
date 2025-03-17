import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './polyfills'; // Importa los polyfills
import MultiuseButton from './components/MultiuseButton';

function App() {
  const [count, setCount] = useState(0);

  // Ejemplo de uso de myMap y myFilter
  const numbers = [1, 2, 3, 4, 5,6,7,8];
  const doubled = numbers.myMap(num => num * 2);
  const evens = numbers.myFilter(num => num % 2 === 0);

  return (
    <>
      <div className='columns-3'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MultiuseButton onClick={() => setCount(count + 1)}>
          Contador: {count}
        </MultiuseButton>
      </div>
      <h2>Ejemplos de polyfills:</h2>
      <p><strong>myMap (doblar valores):</strong> {JSON.stringify(doubled)}</p>
      <p><strong>myFilter (pares):</strong> {JSON.stringify(evens)}</p>
    </>
  );
}

export default App;
