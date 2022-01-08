import React, { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';
import Pokedex from './routes/Pokedex';
import Footer from './Footer';
import en from '../lang/en.json';
import es from '../lang/es.json';
import { quizzesInit } from '../assets/mock-data';
import { postAPI, getAPI, updateAPI } from "../api";

const dictionaryList = { en, es };
export const LangContext = createContext({ userlang: 'es', dictionary: es });

function App(props) {

  const [lang, setLang] = useState('en');
  const [quizzes, setQuizzes] = useState([quizzesInit]);

  const download = async () => {
    let downloadedQuizzes = await getAPI();
    setQuizzes(downloadedQuizzes);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await download();
      } catch (error) {
        alert("error");
      }
    }
    fetchData();
  }, []);

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <>
      <LangContext.Provider value={{ handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang] }}>
        <header>
          <Menu />
        </header>
        <body className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/quiz" element={<Quiz quizzes={quizzes} appDownload2={download}/>} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </body>
          <Footer />
      </LangContext.Provider>
    </>
  );
}

export default App;
