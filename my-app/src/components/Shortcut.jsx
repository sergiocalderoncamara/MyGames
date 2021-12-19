import React from "react";


export default function Shortcut (props) {

    const numeroRespuesta = props.number;

    const seleccion = () => {
        props.indice(numeroRespuesta);
    }

    return (
        <>
        <button className={props.number + 1} onClick={seleccion}>{props.number + 1}</button>
        </>
    );
}