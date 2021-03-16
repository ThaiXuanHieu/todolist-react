import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import { FormatDateInput } from "../../utils/formatDate";

const TaskForm = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setId(props.task.id);
    setTitle(props.task.title);
    setDueDate(FormatDateInput(props.task.dueDate));
    setIsComplete(props.task.isComplete);
  }, [props, props.task]);

  function handleSubmit(e) {
    e.preventDefault();

    const task = {
      id: id,
      title: title,
      dueDate: dueDate,
      isComplete: isComplete,
    };

    if (!id) {
      dispatch(taskAction.create(task))
        .then(() => {
          setId(0);
          setTitle("");
          setDueDate("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(taskAction.update(task))
        .then(() => {
          setId(0);
          setTitle("");
          setDueDate("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Add new task</label>
        <input
          type="text"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate || ""}
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
