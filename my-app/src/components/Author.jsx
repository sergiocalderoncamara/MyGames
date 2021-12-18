import React from "react";

export default function Author (props) {
    return (
        <>
        {props.author.username}
        <img src={props.author.photo.url} alt={props.author.photo.filename} />        
        </>
    );
}