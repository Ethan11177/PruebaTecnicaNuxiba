// Nombre: Users Component
// Autor: Vaquera Aguilera Ethan Emiliano
// Lugar de edición: Ciudad de Mexico
// Fecha: 18 de septiembre de 2024
// Versión: 1.0.0
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchPosts, fetchTodos } from "../../actions/userActions";
import { Button } from "@mui/material";
import AddTodo from "../AddTodo"; // Importar el componente para agregar tarea
import "./Users.scss"; // Importa el archivo de estilos para que refleje el diseño

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const userPosts = useSelector((state) => state.user.posts);
  const userTodos = useSelector((state) => state.user.todos);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers()); // Llamar la acción fetchUsers desde userActions
  }, [dispatch]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleFetchPosts = (userId) => {
    dispatch(fetchPosts(userId)); // Llamar la acción fetchPosts desde userActions
  };

  const handleFetchTodos = (userId) => {
    dispatch(fetchTodos(userId)); // Llamar la acción fetchTodos desde userActions
  };

  return (
    <section className="gradient-custom">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 black-content">
            <div className="card bg-dark text-white">
              <div className="card-body text-center">
                <h2 className="fw-bold text-uppercase">Usuarios</h2>
                <p className="text-white-50">Lista de usuarios</p>

                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                          <Button
                            variant="contained"
                            color="primary"
                            data-bs-toggle="modal"
                            data-bs-target="#userModal"
                            onClick={() => handleSelectUser(user)}
                          >
                            Ver detalles
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar los detalles del usuario */}
      <div
        className="modal fade"
        id="userModal"
        tabIndex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">
                Detalles del usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedUser && (
                <>
                  <p>
                    <strong>ID:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Nombre:</strong> {selectedUser.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                </>
              )}

              {/* Botones para ver los Posts y Todos */}
              {selectedUser && (
                <>
                  <Button
                    variant="contained"
                    color="secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#postsModal"
                    onClick={() => handleFetchPosts(selectedUser.id)}
                    className="firstButton"
                  >
                    Ver Posts
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#todosModal"
                    onClick={() => handleFetchTodos(selectedUser.id)}
                    style={{ marginLeft: "10px" }}
                    className="firstButton"
                  >
                    Ver Todos
                  </Button>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar los Posts del usuario */}
      <div
        className="modal fade"
        id="postsModal"
        tabIndex="-1"
        aria-labelledby="postsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="postsModalLabel">
                Posts del usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {userPosts.length > 0 ? (
                <ul>
                  {userPosts.map((post) => (
                    <li key={post.id}>
                      <h6>{post.title}</h6>
                      <p>{post.body}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay posts disponibles.</p>
              )}
            </div>
            <div className="modal-footer">
              <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                data-bs-target="#userModal" // Botón de regresar al modal principal
              >
                Regresar
              </Button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar los Todos del usuario */}
      <div
        className="modal fade"
        id="todosModal"
        tabIndex="-1"
        aria-labelledby="todosModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="todosModalLabel">
                Todos del usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {userTodos.length > 0 ? (
                <ul>
                  {userTodos.map((todo) => (
                    <li key={todo.id}>
                      <h6>{todo.title}</h6>
                      <p>Completado: {todo.completed ? "Sí" : "No"}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay todos disponibles.</p>
              )}

              {/* Formulario para agregar una nueva tarea */}
              {selectedUser && <AddTodo userId={selectedUser.id} />}
            </div>
            <div className="modal-footer">
              <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                data-bs-target="#userModal" // Botón de regresar al modal principal
              >
                Regresar
              </Button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
