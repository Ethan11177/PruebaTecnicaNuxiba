// Nombre: store
// Autor: Vaquera Aguilera Ethan Emiliano
// Lugar de edición: Ciudad de Mexico
// Fecha: 18 de septiembre de 2024
// Versión: 1.0.0

import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';  // Importando de manera nombrada
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
