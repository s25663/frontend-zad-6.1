import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import JSXRules from './JSXRules';
import FancyTable from './FancyTable'
import Multiple from './Multiple'

function MojeElementy() {
  return (
    <div>
      <JSXRules text="hejka"/>
      <FancyTable n={5}/>
      <Multiple name="liczenie od multiple" number={8}/>
    </div>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<MojeElementy/>)