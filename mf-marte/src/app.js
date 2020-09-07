import React, { Fragment } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout } from './layout';
import './app.css';

const defaultHistory = createBrowserHistory();

export const App = ({ history = defaultHistory }) => {

  return <div className="container">
    <Router history={history}>
      <Fragment>
        <ul>
          <li>
            <Link to="/marte/corteza">Corteza</Link>
          </li>
          <li>
            <Link to="/marte/nucleo">nucleo</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Fragment>
    </Router>
  </div>;
}
