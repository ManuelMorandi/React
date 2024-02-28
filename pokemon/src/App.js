import { useState } from 'react';

export default function Page(){
  const [params, setParams] = useState("");
  const emptyObject = {id: "", name: "", sprite: "", types: []}
  const [result, setResult] = useState(emptyObject);

  function search(){
    if(params != ""){
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      fetch('https://pokeapi.co/api/v2/pokemon/' + params, options)
        .then(response => response.json())
        .then(response => setResult({
          id: response.id,
          name: response.name,
          sprite: response.sprites.front_default,
          types: response.types
        }))
        .catch(err => alert("No se encotró ese pokémon"));
    }
  }

  return (
    <>
      <h1>Pokemon search page</h1>
      <input onChange={e => setParams(e.target.value)} />
      <button onClick={search}>Search</button>
      <Pokemon pokemon={result} className="PokeCard" />
    </>
  )
}

export function Pokemon({pokemon}){

  function stringifyTypes(){
    let result = "";
    for(let i = 0; i < pokemon.types.length; i++)
      result = result + pokemon.types[i].type.name + " ";
    return result;
  }

  if(pokemon.id !=""){
    return (
      <>
        <h1>{pokemon.name}</h1>
        <h3>No. {pokemon.id}</h3>
        <h2>{stringifyTypes()}</h2>
        <img src={pokemon.sprite} />
      </>
    )
  } else {
    return <></>
  }
}