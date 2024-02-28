import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import './App.css';

export default function App(){
  const [actividades, setActividades] = useState([]);
  const [id, setId] = useState(1);
  const categorias = ["Tareas", "Entretenimiento", "Misc"];
  const [categoria, setCategoria] = useState("Todas");

  let actividadesFiltradas = [];
  if(categoria == "Todas"){
    actividadesFiltradas = actividades;
  } else {
    for(let i = 0; i < actividades.length; i++){
      if(actividades[i].categoria == categoria){
        actividadesFiltradas = [...actividadesFiltradas, actividades[i]];
      }
    }
  }

  const listaActividades = actividadesFiltradas.map(actividad => 
    <ToDo key={actividad.id} actividad={actividad} />
  );

  function agregarActividad(nombre, categoria){
    const actividad = { id: id, nombre: nombre, disponible: true, categoria: categoria };
    setId(id + 1);
    setActividades([...actividades, actividad]);
  }

  const cambiarCategoria = (evento) => {
    setCategoria(evento.target.value);
  }

  return (
    <>
      <AgregarActividad funcionAgegar={agregarActividad} />
      <br />
      <label>
        Filtrar por Categoria
        <select onChange={cambiarCategoria} defaultValue={"Todas"}>
          <option key={0} value={"Todas"}>Todas</option>
          {categorias.map((opcion, indice) => {
            return(
              <option key={indice}>{ opcion }</option>
            )
          })}
        </select>
      </label>
      <ul>{listaActividades}</ul>
    </>
  )
}

function AgregarActividad({ funcionAgegar }){
  const [nombre, setNombre] = useState("");
  const categorias = ["Tareas", "Entretenimiento", "Misc"];
  const [categoria, setCategoria] = useState("---");

  function agregar(){
    if(nombre && categoria != "---"){
      funcionAgegar(nombre, categoria);
      setNombre("");
    } else {
      alert("Introduzca valores validos");
    }
  }

  const cambiarCategoria = (evento) => {
    setCategoria(evento.target.value);
  }

  return (
    <>
      <h1>Agregar Actividad</h1>
      <br></br>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <br></br>
      <label>
        Categoria:
        <select onChange={cambiarCategoria}>
          <option>---</option>
          {categorias.map((opcion, indice) => {
            return(
              <option key={indice}>{ opcion }</option>
            )
          })}
        </select>
      </label>
      <br></br>
      <button onClick={agregar}>Guardar</button>
    </>
  )
}