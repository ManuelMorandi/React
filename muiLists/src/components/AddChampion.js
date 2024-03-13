import { useState } from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material'

export function AddChampion({addFn}) {
    const [name, setName] = useState("");
    const [title, setTitle] = useState(0);
    
    function handleSubmit(){
        addFn(name, title);
        setName("");
    }

    return (
        <>
            <h3>Agregar</h3>
            <div className='textField'>
              <TextField label="Nombre" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className='select'>
                <Select value={title} onChange={e => setTitle(e.target.value)}>
                    <MenuItem value={0}>WWE Championship</MenuItem>
                    <MenuItem value={1}>Intercontinental Championship</MenuItem>
                    <MenuItem value={2}>United States Championship</MenuItem>
                </Select>
            </div>
            <div className='button'>
                <Button variant='contained' onClick={handleSubmit}>Agregar</Button>
            </div>
        </>
    )
}