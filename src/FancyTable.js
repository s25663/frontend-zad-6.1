import React from 'react';
import './style.css';

export default function JSXRulses({n}) {
  const elementy = [];

  for (let i = 1; i <= n; i++) {
    elementy.push(<li key={i}>{i}</li>);
  }

  return (
    <div>
      <ul>
        {elementy}
      </ul>  
    </div>
  );
}
