import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from './AddTodo'; // Asegúrate de que AddTodo está correctamente importado.

const Todos = ({ userId }) => {
  const todos = useSelector(state => state.user.todos);

  return (
    <div>
      <h2>Tareas</h2>
      {todos.length === 0 ? (
        <p>No hay tareas disponibles</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <p>{todo.title} - {todo.completed ? 'Completada' : 'Pendiente'}</p>
            </li>
          ))}
        </ul>
      )}
      <h3>Agregar Nueva Tarea</h3>
      <AddTodo userId={userId} />
    </div>
  );
};

export default Todos;
