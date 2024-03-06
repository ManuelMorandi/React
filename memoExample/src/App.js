import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Si yo hago: 
  //          const person = { age, name }
  // Cada vez que se renderiza crea un nuevo objeto, aunque los datos no cambien
  // Eop, el effect imprimira aunque no cambie person, porque el age y name seran los mismos pero el objeto sera otro
  // Por ejemplo, si cambio darkMode, se renderizara de nuevo, se generara un nuevo objeto (con mismo age y name)
  // lo que dispara el efecto, porque el objeto cambio, imprimiendo de nuevo

  // Para evitar esto uso Memo
  // Hago que retorne siempre el mismo objeto salvo que se cambien explicitamente age o name
  const person = useMemo(() => { 
    return { age, name }
  }, [age, name])

  useEffect(() => { // Cada vez que cambie person, lo imprimo en consola
    console.log(person)
  }, [person])

  return (
    <div style={{ background: darkMode ? "#333" : "#FFF" }}>
      Age:{" "}
      <input value={age} type='number' onChange={e => setAge(e.target.value)} />
      <br />
      Name: <input value={name} onChange={e => setName(e.target.value)} />
      <br />
      Dark Mode:{" "}
      <input type='checkbox' value={darkMode} onChange={e => setDarkMode(e.target.checked)} />
    </div>
  )
}

export default App;
