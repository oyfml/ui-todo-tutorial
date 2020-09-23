import React, { useContext, useState, useEffect } from "react";
import { Input, Button } from "antd";
import { setTodos, updateTodo, deleteTodo } from "../context/todo.actions";
import { TodoContext } from "../context/TodoContextProvider";
import { firebaseApi } from "../services/firebaseApi"

const TodoTask = (props) => {
  const [updatedValue, setUpdatedValue] = useState(props.description);
  const [isUpdating, setUpdating] = useState(false);

  const onUpdate = () => {
    if (isUpdating) {
      props.update(props.id, updatedValue);
    }

    setUpdating(!isUpdating);
  };

  return (
    <div className="todo-task">
      {!isUpdating && (
        <div className="todo-task__name" data-cy="todo-task__name">
          {props.description}
        </div>
      )}
      {isUpdating && (
        <Input
          value={updatedValue}
          onChange={({ target: { value } }) => setUpdatedValue(value)}
          placeholder="Update a TODO"
          size="large"
          className="todo-task__input"
          data-cy="todo-task__input"
        />
      )}

      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-update"
        onClick={() => onUpdate()}
      >
        Update
      </Button>
      <Button
        type="primary"
        shape="round"
        className="todo-task__button"
        data-cy="todo-task__button-delete"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export const TodoList = () => {
  
  const { dispatch, state } = useContext(TodoContext);

   useEffect(() => {
     const fetchTodos = async () => {
       const todos = await firebaseApi.fetchTodos();
       dispatch(setTodos(todos));
     }

     fetchTodos();
   }, [dispatch]);

  const handleDeleteTodo = (id) => {
    // TODO: fill in
    firebaseApi.deleteTodo(id);
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (id, description) => {
    firebaseApi.updateTodo(id,description);
    dispatch(updateTodo(id, description));
  };

  return (
    <div className="todo-list" data-cy="todo-list">
      {Object.entries(state.todos).map(([id, todo]) => (
        <TodoTask
          key={id}
          description={todo.description}
          delete={handleDeleteTodo}
          update={handleUpdateTodo}
          id={id}
        />
      ))}
    </div>
  );
};
