// Nombre: Posts Components
// Autor: Vaquera Aguilera Ethan Emiliano
// Lugar de edición: Ciudad de Mexico
// Fecha: 18 de septiembre de 2024
// Versión: 1.0.0

import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector(state => state.user.posts);

  return (
    <div>
      <h2>Publicaciones</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones disponibles</p>
      ) : (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>Comentarios:</h4>
            <ul>
              {post.comments.map(comment => (
                <li key={comment.id}>
                  <strong>{comment.name}</strong>: {comment.body}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
