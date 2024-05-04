import { CREATE, DELETE, FILTER, SEARCH } from "./types";

const initialState = {
  todos: [],
  filter: "ALL",
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        search: state.search,
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case FILTER:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        search: state.search,
      };
    case SEARCH:
      return {
        todos: state.todos,
        filter: state.filter,
        search: action.payload.search,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
