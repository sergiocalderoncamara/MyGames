import React from 'react'

export default function Stat(props){
  return (
    <li className="pokemon-stat">
      <span className="stat-name"><b>{props.item.stat.name}: </b></span>
      <span>{props.item.base_stat}</span>
    </li>
  );
}
