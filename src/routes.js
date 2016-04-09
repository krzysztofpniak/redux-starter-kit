import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from './redux/modules/auth';
import {
  App,
  Home,
  Login,
  NotFound
} from './containers';

export default (store) => {
  const requireLogin = (nextState, replaceState, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replaceState('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth());
      checkAuth();
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Login}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="home" component={Home}/>
      </Route>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
