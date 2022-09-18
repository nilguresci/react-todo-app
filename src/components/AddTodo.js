import React from "react";
import { useState } from "react";
import { todoService } from "../services/todo.service";

const AddTodo = ({ refresh }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onClick = (text, day) => {
    if (!text || !day) {
      console.log("boş");
      alert("Please fill the all inputs.");
      return;
    }
    let data = {
      content: text,
      dayAndTime: day,
    };
    todoService.addTodo(data).then((res) => {
      refresh();
    });
    setText("");
    setDay("");
  };
  // const onSubmit = (e) => {
  //   console.log("onsubmit");
  //   e.preventDefault();
  //   if (!text || text === "") {
  //     alert("Please add a todo");
  //     return;
  //   }

  //   onClick({ text, day });
  //   setText("");
  //   setDay("");
  // };
  return (
    <div className="addTodo ">
      <div className="box">
        <div>Todo</div>
        <div className="inputBox form-group">
          <input
            className="form-control"
            type="text"
            required
            placeholder="Add a task"
            aria-label="default input example"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div>Day & Time</div>
        <div className="inputBox form-group">
          <input
            className="form-control"
            type="text"
            required
            placeholder="Add day and time"
            aria-label="default input example"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          ></input>
        </div>
        <div className="d-flex justify-content-end form-group">
          <button
            type="button"
            className="btn"
            style={{ color: "#ff66d1" }}
            onClick={() => onClick(text, day)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
