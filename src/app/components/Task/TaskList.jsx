import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import taskService from "../../../../services/taskService";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
import { GetDate } from "../../utils/formatDate";

const TaskList = (props) => {
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(taskAction.remove(id));
  // };

  // const handleUpdate = (id) => {
  //   dispatch(taskAction.getTask(id));
  // };

  const handleChange = (id, isComplete) => {
    isComplete = !isComplete;
    dispatch(taskAction.updateStatus(id, isComplete));
  };

  const loadTaskDetail = (id) => {
    dispatch(taskAction.getTask(id));
  };

  // const [searchString, setSearchString] = useState("");
  // const user = JSON.parse(localStorage.getItem("user"));
  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   dispatch(taskAction.search(user.id, searchString));
  // };

  return (
    <div>
      {/* <div className="col-md-6 float-right pr-0">
        <form onSubmit={handleSearch}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <div className="input-group-append">
              <span className="input-group-text">Search</span>
            </div>
          </div>
        </form>
      </div> */}

      {!!props.tasks &&
        props.tasks.map((item) => (
          <button
            key={item.id}
            className="btn-taskItem d-flex align-items-center"
            onClick={() => loadTaskDetail(item.id)}
          >
            <input
              type="checkbox"
              className="mr-3"
              title="Đánh dấu là đã hoàn thành"
              checked={item.isComplete}
              onChange={() => handleChange(item.id, item.isComplete)}
            />
            {item.isComplete ? (
              <del className="title">{item.title}</del>
            ) : (
              <span className="title">{item.title}</span>
            )}
            <span className="dueDate">
              {!item.dueDate ? item.dueDate : GetDate(item.dueDate)}
            </span>
          </button>
        ))}
    </div>
  );
};

export default TaskList;
