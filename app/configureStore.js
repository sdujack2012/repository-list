/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, initialState } from './core/actionsAndReducers';

export default function configureStore() {

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
  );
}