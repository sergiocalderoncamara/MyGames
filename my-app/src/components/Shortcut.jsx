import React from "react";


export default function Shortcut (props) {
    return (
        <>
        <button className={props.number+1} >{props.number}</button>
        </>
    );
}