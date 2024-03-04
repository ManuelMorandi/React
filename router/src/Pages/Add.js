import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add({ addFunction }) {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [info, setInfo] = useState("");

    function add(){
        addFunction(name, info);
        setName("");
        setInfo("");
    }

    return (
        <>
            <label>
                Nombre:
                <input value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Info:
                <input value={info} onChange={e => setInfo(e.target.value)}/>
            </label>
            <button onClick={ () => navigate('/') }>
                Volver
            </button>
            <button onClick={ add }>
                Agregar
            </button>
        </>
    );
}