import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from "../components/Dashboard";
import ErrorPage from "../components/ErrorPage";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRoutes = () => (
  <Router history={history}>
  <div>
      <Switch>
        <PrivateRoute path='/dashboard' component={Dashboard} exact/>
        <PublicRoute path="/" component={LoginPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRoutes;