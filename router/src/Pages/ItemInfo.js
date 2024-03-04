import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ItemInfo({ items }) {
    let navigate = useNavigate();

    let { itemId } = useParams();
    const index = items.findIndex((item) => item.id == itemId);
    let name = "";
    let info = "";
    if(index !== -1){
        const item = items[index];
        name = item.name;
        info = item.info;
    }

    const dataShown = index !== -1 
    ? (
        <>
            <h1> {name} </h1>
            <h4> {itemId} </h4>
            <h2> {info} </h2>
            <br />
            <button onClick={ () => navigate('/') }>
                Volver
            </button>
        </>
    ) 
    : (
        <>
            <h1>No se encontró el item solicitado</h1>
            <br />
            <button onClick={ () => navigate('/') }>
                Volver
            </button>
        </>
    );

    return dataShown;
}