import React from 'react';
import Question from './Question';
import Author from './Author';
import Actionbar from './Actionbar';

export default function Game(props) {
    return (
        <>
            <div>
                <Question question={props.quiz.question} number={props.number}/>
            </div>
            <div>
                <img src={props.quiz.attachment.url} alt="question image" />
            </div>
            <div>
                <Author author={props.quiz.author} />
            </div>
            <div>
                <Actionbar 
                previous={props.previous} previousDisabled={props.previousDisabled}
                next={props.next} nextDisabled={props.nextDisabled}
                />
            </div>
        </>

    );
}
