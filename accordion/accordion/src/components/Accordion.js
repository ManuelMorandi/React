import React, { useState, useRef } from 'react';
import "./Accordion.css";
import Chevron from './Chevron';

function Accordion(props){
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px"); // Para guardar la altura del texto (contenido)
    const [rotate, setRotate] = useState("accordion_icon"); // Para rotar la flecha

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? "active" : "");
        //Activo o desactivo el acordión
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        // Si pasa a desactivo, le pongo 0px para ocultarlo
        // Si pasa a activo, le pongo la altura del content para que se vea entero
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate");
        // Si pasa a activo, lo roto
    }

    return (
        <div className='accordion_section'>
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className='accordion_title'>
                    {props.title}
                </p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className='accordion_content'>
                <div className='accordion_text' dangerouslySetInnerHTML={{__html: props.content}} />
            </div>
        </div>
    )
}

export default Accordion;