import React from 'react';
import './style.css';
import Comp1 from './comp1/comp1';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Comp1 texto="hola" />
    </div>
  );
}
