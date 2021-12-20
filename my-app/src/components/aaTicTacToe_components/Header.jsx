import React, {useContext} from 'react';
import { LangContext } from '../App';
import {Card} from 'react-bootstrap';

export default function Header(props) {

    const lang = useContext(LangContext);

    return (
      <Card>
        <Card.Body>
          <Card.Title>{lang.dictionary["turn"]}</Card.Title>
          <Card.Text>
            {props.text}
            
          </Card.Text>
        </Card.Body>
      </Card>
    );
    }