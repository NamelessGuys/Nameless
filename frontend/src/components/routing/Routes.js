import React from 'react';
import { Switch, Route } from 'react-router';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Feed from '../feed/Feed';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
