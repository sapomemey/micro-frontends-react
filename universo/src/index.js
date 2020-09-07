import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// bus event

window.msj =  window.msj || '';

window.getMsj = window.getMsj || (
  () => {
    return window.msj
  }
);

window.setMsj = window.setMsj || (
  (value) => {
    window.msj = value;
  }
);
