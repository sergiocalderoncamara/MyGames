import React, { useState, useEffect } from 'react';
import Game from '../Game';

export default function Quiz(props) {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [previousDisabled, setPreviousDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const previous = () => {
        let id = currentQuiz;
        if (id > 0) {
            id--;
            setCurrentQuiz(id);
            setPreviousDisabled(false);
            setNextDisabled(false);
        } else {
            setPreviousDisabled(true);
        }
    }

    const next = () => {
        let id = currentQuiz;
        if (id < props.quizzes.length - 1) {
            id++;
            setCurrentQuiz(id);
            setPreviousDisabled(false);
            setNextDisabled(false);
        } else {
            setNextDisabled(true);
        }
    }

    return (
        <main>
            <h2>Quiz</h2>
            <Game 
            quiz={props.quizzes[currentQuiz]} 
            number={currentQuiz} 
            previous={previous} previousDisabled={previousDisabled} 
            next={next} nextDisabled={nextDisabled} />
        </main>
    );
}