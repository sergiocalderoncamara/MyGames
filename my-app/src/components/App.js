import React, { createContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './routes/Home';
import TicTacToe from './routes/TicTacToe';
import Quiz from './routes/Quiz';
import en from '../lang/en.json';
import es from '../lang/es.json';
import { quizzesInit } from '../assets/mock-data';

const dictionaryList = { en, es };
export const LangContext = createContext({ userlang: 'es', dictionary: es });

function App(props) {

  const [lang, setLang] = useState('en');
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setQuizzes(quizzesInit);
      } catch (error) {
        alert("error");
      }
    }
    fetchData();
  });

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <>
      <LangContext.Provider value={{ handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang] }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/quiz" element={<Quiz quizzes={quizzes} />} />
        </Routes>
      </LangContext.Provider>
    </>
  );
}

export default App;
