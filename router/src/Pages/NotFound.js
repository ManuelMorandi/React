import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotFound() {
    let location = useLocation();
    let navigate = useNavigate();

    return (
        <>
            <h1>NotFound</h1>
            <h3>No se ha encontrado la ruta {location.pathname}</h3>
            <button onClick={ () => navigate('/') }>
                Volver
            </button>
        </>
    );
}