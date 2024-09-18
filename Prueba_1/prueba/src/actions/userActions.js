import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchPosts = (userId) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postsWithComments = await Promise.all(
    response.data.map(async (post) => {
      const comments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      return { ...post, comments: comments.data };
    })
  );
  dispatch({ type: FETCH_POSTS, payload: postsWithComments });
};

export const fetchTodos = (userId) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  const sortedTodos = response.data.sort((a, b) => b.id - a.id);
  dispatch({ type: FETCH_TODOS, payload: sortedTodos });
};

export const addTodo = (userId, title, completed) => async (dispatch) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      userId,
      title,
      completed,
    }
  );
  dispatch({ type: ADD_TODO, payload: response.data });
};
