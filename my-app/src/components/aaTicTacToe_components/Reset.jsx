import React, {useContext} from 'react';
import { LangContext } from '../App';
import {Button} from 'react-bootstrap';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  const lang = useContext(LangContext);

  return(
    <Button onClick={click} >
      {lang.dictionary["reset"]}
    </Button>
  );
    
}