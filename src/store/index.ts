import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

// Our initial collection of middlewares
const middlewares = [thunk];

// Add the redux logger if we're in development
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// Function to create the root store and apply the middlewares
export const setStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
