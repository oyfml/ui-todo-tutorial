import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      const todosAfterDelete = { ...state.todos };
      delete todosAfterDelete[data];
      return { ...state, todos: todosAfterDelete };
    case UPDATE_TODO:
      const updatedTodos = { ...state.todos };
      updatedTodos[data.id].description = data.description;
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};
