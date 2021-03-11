import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";

const TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  const newTask = {
    title: title,
    dueDate: dueDate,
    isComplete: false,
  };
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(taskAction.create(newTask))
      .then(() => {
        props.history.push("/task");
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Add new task</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-control"
          placeholder="Due Date"
        />
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};

export default TaskForm;
