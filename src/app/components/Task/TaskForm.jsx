import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import "./style.css";

const TaskForm = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (title === "") {
      return;
    }
    const task = {
      id: id,
      title: title,
      createdBy: user.id,
    };

    dispatch(taskAction.create(task))
      .then(() => {
        setId(0);
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
          placeholder="Add task"
        />
      </div>
    </form>
  );
};

export default TaskForm;
