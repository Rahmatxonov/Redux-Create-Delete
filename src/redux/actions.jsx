import { CREATE, DELETE, FILTER, UPDATE, SEARCH } from "./types";

export const createTodo = (text) => ({
  type: CREATE,
  payload: { text },
});

export const deleteTodo = (id) => ({
  type: DELETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER,
  payload: { filter },
});

export const updateTodo = (update) => ({
  type: UPDATE,
  payload: { update },
});

export const searchTodos = (search) => ({
  type: SEARCH,
  payload: { search },
});
