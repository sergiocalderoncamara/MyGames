import React from "react";

export default function Question (props) {
    return (
        <>
            <h3>Question {props.number + 1}</h3>
            {props.question}
        </>
    );
}