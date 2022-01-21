import React from "react";

export default function Pages(props) {
    return (
        <>
            <button type="button" className="btn btn-dark" onClick={props.previous}>
                Anteriores
            </button>
            {' '}
            <button type="button" className="btn btn-dark" onClick={props.next}>
                Siguientes
            </button>
        </>
    );
}