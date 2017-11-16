import React from 'react';
import { render } from 'react-dom';
import { hello } from './index2.js';

const app = document.getElementById('app');

const App = () => (
  <div>
    <h1>{hello}</h1>
  </div>
);

render(<App />, app);

// console.log(hello);
// document.write(hello);