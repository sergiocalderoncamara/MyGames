import React, { useState, useEffect } from 'react';
import {useContext} from 'react';
import { LangContext } from '../App';
import Header from '../TicTacToe/Header.jsx';
import Board from '../TicTacToe/Board.jsx';
import Reset from '../TicTacToe/Reset.jsx';

const PLAYERX = " 1 - Xs";
const PLAYER0 = " 2 - 0s";

export default function App(props) {
  const lang = useContext(LangContext);

  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
    ]);

  function resetClick(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  let tenemosGanador = false;
  let winner = "";
  function appWin() {
    if ((values[0][0]==='X') && (values[0][1]==='X') && (values[0][2]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[0][0]==='X') && (values[1][1]==='X') && (values[2][2]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[0][0]==='X') && (values[1][0]==='X') && (values[2][0]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[1][0]==='X') && (values[1][1]==='X') && (values[1][2]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[2][0]==='X') && (values[2][1]==='X') && (values[2][2]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[0][1]==='X') && (values[1][1]==='X') && (values[2][1]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[0][2]==='X') && (values[1][2]==='X') && (values[2][2]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    if ((values[0][2]==='X') && (values[1][1]==='X') && (values[2][0]==='X')){
      tenemosGanador = true;
      winner = lang.dictionary["winnerX"];
    }
    
    if ((values[0][0]==='0') && (values[0][1]==='0') && (values[0][2]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[0][0]==='0') && (values[1][1]==='0') && (values[2][2]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[0][0]==='0') && (values[1][0]==='0') && (values[2][0]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[1][0]==='0') && (values[1][1]==='0') && (values[1][2]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[2][0]==='0') && (values[2][1]==='0') && (values[2][2]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[0][1]==='0') && (values[1][1]==='0') && (values[2][1]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[0][2]==='0') && (values[1][2]==='0') && (values[2][2]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
    if ((values[0][2]==='0') && (values[1][1]==='0') && (values[2][0]==='0')){
      tenemosGanador = true;
      winner = lang.dictionary["winner0"];
    }
  }

  function appClick(rowNumber, columnNumber) {
    if (tenemosGanador==false) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
    }
  }

  appWin();

  let text = lang.dictionary["player"] + turn;

  return (
    <div class='tictactoe'>
      <Header text={text}/>
      <Board values={values}  appClick={appClick}/>
      <h3>{lang.dictionary["moves"]} {moves}</h3>
      <Reset resetClick={resetClick}></Reset>
      <div class='mostrarGanador'>{winner}</div>
    </div>
  );

}