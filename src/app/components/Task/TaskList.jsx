import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import taskService from "../../../../services/taskService";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
import { GetDate } from "../../utils/formatDate";

const TaskList = (props) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(taskAction.remove(id));
  };

  const handleUpdate = (id) => {
    dispatch(taskAction.getTask(id));
  };

  const handleChange = (id, isComplete) => {
    isComplete = !isComplete;
    dispatch(taskAction.updateStatus(id, isComplete));
  };

  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(taskAction.search(searchString));
  };

  return (
    <div>
      <h6 className="mt-5">List Task</h6>
      <div className="col-md-6 float-right pr-0">
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
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!!props.tasks &&
            props.tasks.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="mr-3"
                    title="Đánh dấu là đã hoàn thành"
                    checked={item.isComplete}
                    onChange={() => handleChange(item.id, item.isComplete)}
                  />
                </td>
                <td>{item.title}</td>
                <td>{GetDate(item.dueDate)}</td>
                <td>
                  <button className="btn btn-info">Thêm bước</button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
