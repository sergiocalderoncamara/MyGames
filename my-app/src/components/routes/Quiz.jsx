import React, { useState, useEffect } from 'react';
import Game from '../Game';
import Shortcut from '../Shortcut';

export default function Quiz(props) {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [previousDisabled, setPreviousDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);

    const previous = () => {
        let id = currentQuiz;
        id--;
        setCurrentQuiz(id);
        control(id);
    }

    const next = () => {
        let id = currentQuiz;
        id++;
        setCurrentQuiz(id);
        control(id);
    }

    const indice = (indice) => {
        setCurrentQuiz(indice);
        control(indice);
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

    return (
        <main>
            <h2>Quiz</h2>

            {(() => {
                if (finished) {
                    return (
                        <h3>Score: {score}</h3>
                    )
                } else {
                    return (
                        <>
                            <Game
                                quiz={props.quizzes[currentQuiz]}
                                number={currentQuiz}
                                previous={previous} previousDisabled={previousDisabled}
                                next={next} nextDisabled={nextDisabled}
                                resultado={recogerAnswer}
                                comprobar={comprobar} />
                            <div>
                                {props.quizzes.map((quiz, index) =>
                                    <Shortcut key={index} number={index} indice={indice} />
                                )}
                            </div>

                        </>
                    )
                }
            })()}

        </main>
    );
}