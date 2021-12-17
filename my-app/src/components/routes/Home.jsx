import React from 'react';
import { LangContext } from '../App';

export default function Home() {
    return (
        <LangContext.Consumer>
            {(context) => {
                return (
                    <main>
                        <h3>{context.dictionary["welcome"]}</h3>
                        <p>{context.dictionary["text1"]}</p>
                        <p>{context.dictionary["text2"]}</p>
                        <div>
                            <img src={'minijuegos.jpg'} className="img"/>
                        </div>
                    </main>
                );
            }}
        </LangContext.Consumer>
    );
}