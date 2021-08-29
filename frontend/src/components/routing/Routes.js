import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../auth/Login';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
