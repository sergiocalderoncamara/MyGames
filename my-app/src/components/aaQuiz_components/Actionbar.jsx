import React, {useContext} from "react";
import { LangContext } from '../App';

export default function Actionbar(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <button onClick={props.previous} disabled={props.previousDisabled}>{lang.dictionary['previous']}</button>
            <button onClick={props.next} disabled={props.nextDisabled}>{lang.dictionary['next']}</button>
            <button onClick={props.comprobar}>Submit</button>
        </>
    );
}