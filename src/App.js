import { useState } from 'react'
import './App.css';

function App() {
  const INITIAL_VALUE = 0
  const [number, setNumber] = useState(INITIAL_VALUE)

  const mais = () => {
    setNumber(number + 1)
  }

  const menos = () => {
    setNumber(number - 1)
  }

  const reset = () => {
    setNumber(INITIAL_VALUE)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Hooks</h1>
      </header>
      <main className="App-main">
        <div className="content">
          <button onClick={menos}>-</button>
          <p>{number}</p>
          <button onClick={mais}>+</button>
        </div>
        <button
          onClick={reset}
          className="reset_bt"
        >
          Reset number
        </button>
      </main>
    </div>
  );
}

export default App;
