import React, { useState, useContext } from 'react';
import Game from '../Quiz/Game';
import Shortcut from '../Quiz/Shortcut';
import { LangContext } from '../App';

export default function Quiz(props) {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [previousDisabled, setPreviousDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);
    const [inputValue, setInputValue] = useState("");
    const [contadorPistas, setContadorPistas] = useState(3);
    const lang = useContext(LangContext);

    const previous = () => {
        let id = currentQuiz;
        id--;
        setCurrentQuiz(id);
        control(id);
        setInputValue("");
    }

    const next = () => {
        let id = currentQuiz;
        id++;
        setCurrentQuiz(id);
        control(id);
        setInputValue("");
    }

    const indice = (indice) => {
        setCurrentQuiz(indice);
        control(indice);
        setInputValue("");
    }

    const control = (indice) => {
        if (indice <= 0) {
            setPreviousDisabled(true);
            setNextDisabled(false);
        } else if (indice >= props.quizzes.length - 1) {
            setPreviousDisabled(false);
            setNextDisabled(true);
        } else {
            setPreviousDisabled(false);
            setNextDisabled(false);
        }
    }

    const recogerAnswer = (resultado) => {
        let copia = answers;
        copia.splice(currentQuiz, 1, resultado);
        setAnswers(copia);
        setInputValue(resultado);
    }

    const comprobar = () => {
        let c = 0;
        props.quizzes.forEach((element, index) => {
            if (element.answer.toLowerCase() === answers[index].toLowerCase()) {
                c++;
            }
        });
        setScore(c);
        setFinished(true);
    }

    const quizDownload2 = () => {
        props.appDownload2();
        setFinished(false);
        setScore(0);
        setCurrentQuiz(0);
        setInputValue("");
        setContadorPistas(3);
    }

    const pista = () => {
        let copia = contadorPistas;
        if (copia > 0) {
            setInputValue(props.quizzes[currentQuiz].answer);
            recogerAnswer(props.quizzes[currentQuiz].answer);
            copia--;
            console.log(copia);
        }
        setContadorPistas(copia);
    }

    return (
        <main>
            {(() => {
                if (finished) {
                    return (
                        <>
                            <h3 className='display-3'>{lang.dictionary["score"]}: {score}</h3>
                            <div>
                                <button type="button" className="btn btn-lg btn-primary" onClick={quizDownload2}>
                                    {lang.dictionary['reset']}
                                </button>
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                            <div className='row mt-2'>
                                <div className='col-12 btn-group' role="group" aria-label="Basic outlined example">
                                    {props.quizzes.map((quiz, index) =>
                                        <Shortcut key={index} number={index} indice={indice} />
                                    )}
                                </div>
                            </div>
                            <Game
                                quiz={props.quizzes[currentQuiz]}
                                number={currentQuiz}
                                previous={previous} previousDisabled={previousDisabled}
                                next={next} nextDisabled={nextDisabled}
                                resultado={recogerAnswer}
                                input={inputValue}
                                comprobar={comprobar}
                                quizDownload2={quizDownload2}
                                pista={pista}
                                contadorPistas={contadorPistas} />
                        </>
                    )
                }
            })()}

        </main>
    );
}