import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Items({ items }) {
    let navigate = useNavigate();

    const itemsInfo = items.map(item => 
        <p key={item.id} onClick={ () => navigate('/item/' + item.id) }> 
            {item.id + ") " + item.name} 
        </p>
    );

    return (
        <>
            <button onClick={ () => navigate('/add') }>
                Agregar
            </button>
            <br />
            <ul>
                { itemsInfo }
            </ul>
        </>
    );
}