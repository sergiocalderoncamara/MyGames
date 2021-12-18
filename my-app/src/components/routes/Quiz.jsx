import React, {useState, useEffect} from 'react';
import { quizzesInit } from '../../assets/mock-data';
import Game from '../Game';

export default function Quiz (props) {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);

    return (
        <main>
            <h2>Quiz</h2>
            <Game quiz={props.quizzes[currentQuiz]}/>
        </main>
    );
}