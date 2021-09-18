import React from 'react';
import { Switch, Route } from 'react-router';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Feed from '../feed/Feed';
import Post from '../post/Post';
import Settings from '../user/Settings';
import Contact from '../user/Contact';
import Profile from '../user/Profile';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
