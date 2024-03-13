import './App.css';
import { useState, useRef } from 'react';
import { AddChampion } from './components/AddChampion';
import { WorldChampions } from './components/WorldChampions';
import { MidcardChampions } from './components/MidcardChampions';

function App() {
  const [wweChamps, setWweChamps] = useState([
    {id: 1, name: "Hulk Hogan"},
    {id: 2, name: "John Cena"},
    {id: 3, name: "Roman Reigns"}
  ]);
  const [icChamps, setIcChamps] = useState([
    {id: 1, name: "Ricky Steamboat"},
    {id: 2, name: "Roman Reigns"}
  ]);
  const [usChamps, setUsChamps] = useState([
    {id: 1, name: "Roman Reigns"},
    {id: 2, name: "John Cena"}
  ]);
  const wweIdRef = useRef(4);
  const icIdRef = useRef(3);
  const usIdRef = useRef(3);

  function handleNewChamp(name, title){
    let champ;
    switch(title){
      case 0:
        champ = {id: wweIdRef.current++, name: name};
        setWweChamps([...wweChamps, champ]);
        break;
      case 1:
        champ = {id: icIdRef.current++, name: name};
        setIcChamps([...icChamps, champ]);
        break;
      default:
        champ = {id: usIdRef.current++, name: name};
        setUsChamps([...usChamps, champ]);
        break;
    }
  }

  function tripleCrown(){
    let ret = 0;
    wweChamps.forEach(champ => {
      const ic = icChamps.find(c => { return c.name === champ.name });
      const us = usChamps.find(c => { return c.name === champ.name });
      if(us !== undefined && ic !== undefined) {
        ret++;
      }
    });
    return ret;
  }

  return (
    <div className='App'>
      <AddChampion addFn={handleNewChamp} />
      <WorldChampions wweChamps={wweChamps} />
      <MidcardChampions icChamps={icChamps} usChamps={usChamps} />
      <h5>Campeones triple corona: {tripleCrown()}</h5>
    </div>
  );
}

export default App;
