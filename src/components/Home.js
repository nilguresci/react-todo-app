import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = ({ refresh, todos }) => {
  return (
    <div>
      <AddTodo refresh={refresh} />
      <TodoList todos={todos} refresh={refresh} />
    </div>
  );
};

export default Home;
