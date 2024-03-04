import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Items from './Pages/Items';
import Add from './Pages/Add';
import ItemInfo from './Pages/ItemInfo';
import NotFound from './Pages/NotFound';

function App() {
  const [items, setItems] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addNewItem(name, info){
    const item = {id: nextId, name: name, info: info};
    setNextId(nextId + 1);
    setItems([...items, item]);
  }

  return (
    <Routes>
      <Route path="/" element={<Items items={items} />} />
      <Route path="/add" element={<Add addFunction={addNewItem} />} />
      <Route path="/item/:itemId" element={<ItemInfo items={items} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;
