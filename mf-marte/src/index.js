import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

window.renderMarte = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountMarte = containerId => {
  if(document.getElementById(containerId)) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  }
};

if (!document.getElementById('Marte-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

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
