import { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import { todoService } from "./services/todo.service";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.fetchTodos().then((data) => {
      setTodos(data);
    });
  }, []);
  //buraya yenile fonksiyonu yaz üstte ki useEffect in içi gibi, diğer componentlere props olarak at ve gerektiğinde çağır
  const refresh = () => {
    todoService.fetchTodos().then((data) => {
      setTodos(data);
    });
    console.log("refresh");
  };
  return (
    <Router>
      <div className="d-flex">
        <Menu />
        <div className="content col-10">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home refresh={refresh} todos={todos} />}
            />
            <Route path="/login" index exact element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
