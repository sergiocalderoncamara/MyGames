import React, { useContext } from "react";
import { LangContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

export default function Actionbar(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-lg btn-primary" onClick={props.previous} disabled={props.previousDisabled}>
                    {lang.dictionary['previous']}
                </button>
                <button type="button" className="btn btn-lg btn-primary" onClick={props.next} disabled={props.nextDisabled}>
                    {lang.dictionary['next']}
                </button>
                <button type="button" className="btn btn-lg btn-primary" onClick={props.gameDownload2}>
                    {lang.dictionary['reset']}
                </button>
                <button type="button" className="btn btn-lg btn-danger" onClick={props.pista}>
                    {lang.dictionary['clue']}: ({props.contadorPistas})
                </button>
                <button type="button" className="btn btn-lg btn-success" onClick={props.comprobar}>
                    {lang.dictionary["submit"]}
                </button>
            </div>
        </>
    );
}