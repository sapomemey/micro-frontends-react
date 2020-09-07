import React, { Fragment } from 'react';

export const Nucleo = () => {
  const sendTierra = () => {
    window.setMsj('soy un marciano');
  };

  return <Fragment>
    <h1>nucleo</h1>

    <button onClick={sendTierra}>Mensaje a tierra</button>
  </Fragment>
};
