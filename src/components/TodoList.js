import React from "react";
import { todoService } from "../services/todo.service";
// import { useState } from "react";

const TodoList = ({ todos, refresh }) => {
  // const [todos, setTodos] = useState()
  const deleteTodo = (id) => {
    todoService.deleteTodo(id).then(() => {
      refresh();
    });
  };

  const updateTodo = (id) => {
    todoService.updateTodo(id).then(() => {
      refresh();
    });
  };
  return (
    <div className="todoList">
      <div className="list">
        Todos - {todos.filter((todo) => !todo.isCompleted).length}
      </div>
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <div className="list-card">
            <div className="d-flex">
              <button
                type="button"
                className="button"
                onClick={() => updateTodo(todo.id)}
              >
                {todo.isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  </svg>
                )}
              </button>
              <div className="text">{todo.content}</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="time">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <div className="time-text">{todo.dayAndTime}</div>
              </div>
              <div className="deleteTodo" style={{ color: "#854dca" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

      <div className="completed">
        Completed - {todos.filter((todo) => todo.isCompleted).length}
      </div>
      {todos
        .filter((todo) => todo.isCompleted)
        .map((todo) => (
          <div className="list-card">
            <div className="d-flex">
              <button
                type="button"
                className="button"
                onClick={() => updateTodo(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </button>
              <div className="text">{todo.content}</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="time">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <div className="time-text">{todo.dayAndTime}</div>
              </div>
              <div className="deleteTodo" style={{ color: "#854dca" }}>
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
