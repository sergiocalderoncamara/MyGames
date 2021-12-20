import React from "react";


export default function Shortcut(props) {

    const numeroRespuesta = props.number;

    const seleccion = () => {
        props.indice(numeroRespuesta);
    }

    return (
        <>
            <button type="button" className="btn btn-outline-primary" onClick={seleccion}>{props.number + 1}</button>
        </>
    );
}