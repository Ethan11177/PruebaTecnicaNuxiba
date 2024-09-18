// Nombre: index Reducers
// Autor: Vaquera Aguilera Ethan Emiliano
// Lugar de edición: Ciudad de Mexico
// Fecha: 18 de septiembre de 2024
// Versión: 1.0.0

import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
