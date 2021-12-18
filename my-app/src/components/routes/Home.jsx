import React, {useContext} from 'react';
import { LangContext } from '../App';

export default function Home() {

    const lang = useContext(LangContext);

    return (
                    <main>
                        <h3>{lang.dictionary["welcome"]}</h3>
                        <p>{lang.dictionary["text1"]}</p>
                        <p>{lang.dictionary["text2"]}</p>
                        <div>
                            <img src={'minijuegos.jpg'} className="img"/>
                        </div>
                    </main>
    );
}