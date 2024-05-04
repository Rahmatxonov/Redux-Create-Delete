import React, { useState } from "react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(createTodo(todoText.trim()));
      setTodoText("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="max-w-[1000px] mx-auto sm:mt-8 p-4 bg-gray-200 rounded-md">
      <h2 className="text-center mb-6 font-bold text-[30px] uppercase">
        todo app
      </h2>

      <div className="flex items-center mb-4">
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          name="addInputTodo"
          id="addInputTodo"
          placeholder="Add Todo"
          className="flex-grow outline-none p-2 border-b-2 border-gray-300 focus:border-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="ml-4 p-2 bg-blue-500 text-white text-[24px] rounded-md hover:bg-blue-600 focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className="flex items-center justify-between capitalize bg-slate-300 mt-5 p-3 rounded-md"
            key={index}
          >
            {todo.text}

            <button
              className="text-red-500 text-[20px] hover:text-red-600 "
              onClick={() => handleDeleteTodo(index)}
            >
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
