import { FETCH_USERS, FETCH_POSTS, FETCH_TODOS, ADD_TODO } from '../actions/userActions';

const initialState = {
    users: [],
    posts: [],
    todos: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload };
        case FETCH_POSTS:
            return { ...state, posts: action.payload };
        case FETCH_TODOS:
            return { ...state, todos: action.payload };
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
};

export default userReducer;
