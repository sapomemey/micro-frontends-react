import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MicroFrontend } from './MicroFrontend';
import { AppHeader } from './AppHeader';
import { useMetadataMicroFrontends } from './useMetadataMicroFrontends';

export const App = () => {
  const { data } = useMetadataMicroFrontends();

  return <BrowserRouter>
    <Fragment>
      <AppHeader />
      <Switch>
        {
          data.map(mf => {
            return <Route key={mf.name} path={mf.path} render={({ history }) => <MicroFrontend history={history} host={mf.host} name={mf.name}></MicroFrontend>} />
          })
        }
      </Switch>
    </Fragment>
  </BrowserRouter>;
};
