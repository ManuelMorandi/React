import { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App(){
  const dafaultTimer = new Date(0, 0, 0, 0, 5);
  const [time, setTime] = useState(dafaultTimer);
  const [counting, setCounting] = useState(false);
  const intervalId = useRef(null);

  const text = counting ? <h3>Stop</h3> : <h3>Start</h3>;

  const secondsParsed = time.getSeconds().toString().padStart(2, "0"); 

  const handleTimeClick = () => {
    if(counting) { // Si estoy contando y clickeo para parar
      clearInterval(intervalId.current); // Reinicio el id del intervalo
      intervalId.current = null;
    } else {
      intervalId.current = window.setInterval(()  => { // Guardo el id
        // Se podría hacer más sencillo con los milisegundos del Date
        setTime((prevTime) => {
            let minutes = prevTime.getMinutes();
            let seconds = prevTime.getSeconds();
            if(seconds == 0){
              minutes--;
              seconds = 59;
            } else {
              seconds--;
            }
            return new Date(0, 0, 0, 0, minutes, seconds)
        })
      }, 1000); // Hago que pase cada segundo
    }
    setCounting(!counting);
  }

  function reset(){
    if(counting){ // Si el contador está corriendo
      clearInterval(intervalId.current); // Lo paro
      setCounting(false);
    }
    setTime(dafaultTimer);
  }

  useEffect(() => { 
    return () => { // Para cleanup
      if(counting) // Si cuando saco "elimino" el componente, sigue contando
        clearInterval(intervalId.current); // Lo paro
    };
  }, []);

  return (
    <>
      <h1>{ time.getMinutes() + ":" + secondsParsed }</h1>
      <button onClick={ handleTimeClick }>
        { text }
      </button>
      <button onClick={ reset }>
        <h3>Reset</h3>
      </button>
    </>
  )
}

