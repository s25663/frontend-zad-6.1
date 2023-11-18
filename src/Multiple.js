import React from 'react';
import './style.css';

export default function JSXRulses({name, number}) {
  const elementy = [];

  for (let i = 1; i <= number; i++) {
    elementy.push(<li key={i}>{i}</li>);
  }

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {elementy}
      </ul>  
    </>
  );
}
