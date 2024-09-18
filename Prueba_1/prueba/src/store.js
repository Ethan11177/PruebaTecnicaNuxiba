import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';  // Importando de manera nombrada
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
