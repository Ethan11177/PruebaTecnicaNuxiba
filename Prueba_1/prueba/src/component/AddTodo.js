// Nombre: AddTodo Component
// Autor: Vaquera Aguilera Ethan Emiliano
// Lugar de edición: Ciudad de Mexico
// Fecha: 18 de septiembre de 2024
// Versión: 1.0.0

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/userActions';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';

const AddTodo = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(userId, title, completed));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label="Titulo de la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={e => setCompleted(e.target.checked)} />}
        label="Completada"
      />
      <Button type="submit" variant="contained">Agregar Tarea</Button>
    </form>
  );
};

export default AddTodo;
