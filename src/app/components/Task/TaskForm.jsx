import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import './style.css'

const TaskForm = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    
    const task = {
      id: id,
      title: title,
      createdBy: user.id
    };
    
    if (!id) {
      dispatch(taskAction.create(task))
        .then(() => {
          setId(0);
          setTitle("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(taskAction.update(task))
        .then(() => {
          setId(0);
          setTitle("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      {/* <div className="form-group">
        <input
          type="date"
          value={dueDate || ""}
          onChange={(e) => setDueDate(e.target.value)}
          className="input-dueDate"
          placeholder="Due Date"
        />
      </div> */}
      {/* <button className="btn btn-success" onClick={handleSubmit}>
        Save
      </button> */}
    </form>
  );
};

export default TaskForm;
