import './App.css';
import { useState, useRef } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const key = "TEST";
  const localStorage = useLocalStorage(key);
  const [value, setValue] = useState("");
  const valueRef = useRef("");

  return (
    <>
      <div className='section'>
        <input onChange={e => valueRef.current = e.target.value} />
        <button onClick={() => localStorage.setLocalStorage(valueRef.current)}>Set Value</button>
      </div>
      <div className='section'>
        <button onClick={() => setValue(localStorage.getLocalStorage())}>Get Value</button>
      </div>
      <div className='value'>
        <h1>{value}</h1>
      </div>
      <div className='section'>
        <button onClick={() => localStorage.removeLocalStorage()}>Clear Value</button>
      </div>
    </>
  )
}

export default App;
