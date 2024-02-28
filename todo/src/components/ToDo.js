import { useState } from 'react';

export default function ToDo({ actividad }){
    const { id, nombre } = actividad;
    const [disponible, setdisponible] = useState(actividad.disponible);
  
    let checkbox = <input type="checkbox" checked={!disponible} onChange={e => setdisponible(!disponible)} />
  
    let texto = <h3> {id + ") " + nombre } </h3>;
    texto = disponible ? texto : <strike>{ texto }</strike>
  
    return (
      <>
        {checkbox}
        {texto}
      </>
    )
  }