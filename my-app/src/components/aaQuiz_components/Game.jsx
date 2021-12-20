import React from 'react';
import Question from './Question';
import Author from './Author';
import Actionbar from './Actionbar';
import Answer from './Answer';

export default function Game(props) { 
    return (
        <>
            <div>
                <Question question={props.quiz.question} number={props.number} />
            </div>
            <div>
                {(() => {
                    if (!props.quiz.attachment || props.quiz.attachment == null) {
                        return (
                            <img src="notfound.jpg" alt="question image" />
                        )
                    } else {
                        return (
                            <img src={props.quiz.attachment.url} alt="question image" />
                        )
                    }
                })()}
            </div>
            <div>
                <Author author={props.quiz.author} />
            </div>
            <div>
                <Answer resultado={props.resultado}/>
            </div>
            <div>
                <Actionbar
                    previous={props.previous} previousDisabled={props.previousDisabled}
                    next={props.next} nextDisabled={props.nextDisabled}
                    comprobar={props.comprobar}
                />
            </div>
        </>

    );
}