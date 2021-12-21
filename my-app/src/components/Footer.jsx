import React, { useContext } from 'react';
import { LangContext } from './App';

export default function Author(props) {

    const lang = useContext(LangContext);

    return (
        <>
            <footer className="bg-light text-center text-lg-start mt-5">
                <div className="text-center p-3">
                    {lang.dictionary['footer']}
                </div >
            </footer >
        </>


    );

}