import React from "react";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchTodos } from "../actions/userActions";
import { Button } from "@mui/material";

const UserDetails = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>
        {user.name} ({user.username})
      </h3>
      <p>Email: {user.email}</p>
      <Button variant="contained" onClick={() => dispatch(fetchPosts(user.id))}>
        Ver Posts
      </Button>
      <Button variant="contained" onClick={() => dispatch(fetchTodos(user.id))}>
        Ver Todos
      </Button>
    </div>
  );
};

export default UserDetails;
