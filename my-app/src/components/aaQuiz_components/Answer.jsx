import React, {useState} from "react";

export default function Answer (props) {

    const [answer, setAnswer] = useState();

    const handleInputChange = (event) => {
        props.resultado(event.target.value);
    }

    return (
        <>
        <input type="text" id="respuesta" placeholder="Answer" onChange={handleInputChange}/>
        </>
    );
}