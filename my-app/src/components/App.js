import React, { createContext, useState} from 'react';
import Navbar from './Navbar';
import en from '../lang/en.json';
import es from '../lang/es.json';

const dictionaryList = { en, es };
export const LangContext = createContext({userlang: 'es', dictionary: es});

function App() {

  const [lang, setLang] = useState('en');

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <>
    <LangContext.Provider value={{handleLanguageChange: handleLanguageChange, userLang: lang, dictionary: dictionaryList[lang]}}>
      <Navbar/>
    </LangContext.Provider>
    </>
  );
}

export default App;
