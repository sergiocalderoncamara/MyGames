import { LangContext } from "./App";

export default function LangSelector(props) {
  return <LangContext.Consumer>
    {(context) => {
      return <select onChange={context.handleLanguageChange} value={context.userLang}>
          <option key="en" value="en">{context.dictionary["en"]}</option>
          <option key="es" value="es">{context.dictionary["es"]}</option>
        </select>
    }}		
    </LangContext.Consumer>
}