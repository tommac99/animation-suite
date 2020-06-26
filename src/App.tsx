import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setStore } from './store';
import { routes } from './routes';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginReact from '@bugsnag/plugin-react';
import { renderRoutes } from 'react-router-config';

export const App = (props: any) => {
  return (
    <Provider store={setStore()}>
      <Router>{renderRoutes(routes, props)}</Router>
    </Provider>
  );
};
