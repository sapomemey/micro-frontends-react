import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Corteza } from './features/corteza/corteza';
import { Nucleo } from './features/nucleo/nucleo';

export const Layout = () => {

  return <Switch>
    <Fragment>
      <Route exact path="/marte/corteza" component={Corteza} />
      <Route exact path="/marte/nucleo" component={Nucleo} />
      <Redirect to="/marte/corteza"/>
    </Fragment>
  </Switch>
}
