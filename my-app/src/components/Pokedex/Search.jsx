import React from "react";
import { Button } from "react-bootstrap";

export default function Search(props) {

    const onChange = (e) => {
        props.select(e.target.value);
    }


    return (
        <>
            <input placeholder="Buscar pokemon" onChange={onChange} />
            {' '}
            <Button
                variant="dark"
                disabled={props.isLoading}
                onClick={!props.isLoading ? props.click : null}
            >
                {props.isLoading ? 'Loading…' : 'Search'}
            </Button>
        </>
    );
}