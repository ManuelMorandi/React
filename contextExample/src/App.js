import './App.css';
import React, { useState, createContext } from 'react';
import FunctionContext from './components/FunctionContext';
import ClassContext from './components/ClassContext'

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>toggleTheme</button>
        <FunctionContext />
        <ClassContext />
      </ThemeContext.Provider>
    </>
  )
}

export default App;
