import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MicroFrontend } from './MicroFrontend';
import { AppHeader } from './AppHeader';

export const useMetadataMicroFrontends = (url) => {
  const [state, setState] = useState({
    loading: true,
    html: <div></div>
  });

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        const data = resp.metadaMicroFrontends;
        setState({
          loading: false,
          html: <BrowserRouter>
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
          </BrowserRouter>
        });
      });
  }, []);

  return state;
};
