import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const list = ["Perro", "Gato", "Carpincho", "Caballo", "Ballena", "Jaguar", "Hamster"];

  function getAnimals() {
    let filteredList = list.filter((animal) => animal.toLowerCase().includes(search.toLowerCase()));
    return filteredList.map(animal => 
      <h3 key={animal}>{animal}</h3>
    )
  }

  return (
    <>
      <label>
        Search:
        <input value={search} onChange={e => setSearch(e.target.value)} />
      </label>
      <ul>
        { getAnimals() }
      </ul>
    </>
  )
}

export default App;
