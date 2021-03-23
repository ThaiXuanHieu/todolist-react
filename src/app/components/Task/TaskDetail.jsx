import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import Step from "../Step/Step";

const TaskDetail = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { list, task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState("");

  useEffect(() => {
    setTitleTask(task.title);
  }, [task.title]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    task.title = titleTask;
    dispatch(taskAction.update(task));
  };

  const handleChangeStatusTask = (task) => {
    task.isComplete = !task.isComplete;
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
          <form onSubmit={handleUpdateTask} style={{width: "100%"}}>
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
      <div className="box-item-right update-dueDate p-2 bg-white"></div>
      <div className="box-item-right note p-2 bg-white">
        <form>
          <textarea className="input-note"></textarea>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
