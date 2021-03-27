import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import Step from "../Step/Step";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { FormatDateInput } from "../../utils/formatDate";

const TaskDetail = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { list, task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState("");
  const [dueDate, setDueDate] = useState();

  useEffect(() => {
    setTitleTask(task.title);
    task.dueDate
      ? setDueDate(new Date(FormatDateInput(task.dueDate)))
      : setDueDate(new Date());
  }, [task.dueDate, task.title]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    task.title = titleTask;
    dispatch(taskAction.update(task));
  };

  const handleChangeStatusTask = (task) => {
    task.isComplete = !task.isComplete;
    dispatch(taskAction.update(task));
  };

  const handleUpdateDueDate = (task) => {
    task.dueDate = dueDate;
    dispatch(taskAction.update(task));
  };

  return (
    <div>
      <div className="p-2 box-item-right bg-white">
        <div
          className="mb-3"
          style={{ paddingLeft: "10px", display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            className="mr-3"
            title="Đánh dấu là đã hoàn thành"
            checked={task.isComplete}
            onChange={() => handleChangeStatusTask(task)}
          />
          <form onSubmit={handleUpdateTask} style={{ width: "100%" }}>
            <input
              type="text"
              className="input-detailTask font-weight-bold"
              value={titleTask || ""}
              onChange={(e) => setTitleTask(e.target.value)}
            />
          </form>
        </div>
        <Step steps={task.steps} taskId={task.id} />
      </div>
      <div className="box-item-right update-dueDate p-2 bg-white">
        <div className="date-picler-custom">
          <p style={{ fontWeight: "500", fontSize: "14px", color: "#4f4f50" }}>
            Add Due date
          </p>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
          />
        </div>
        <div className="mt-2">
          <button
            className="btn btn-primary rounded-0"
            onClick={() => handleUpdateDueDate(task)}
          >
            Save
          </button>
        </div>
      </div>
      <div className="box-item-right note p-2 bg-white">
        <form>
          <textarea className="input-note"></textarea>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
