import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@material-ui/core";
import * as stepAction from "../../actions/stepAction";
import * as taskAction from "../../actions/taskAction";
const TaskDetail = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { list, task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState("");
  const [titleStep, setTitleStep] = useState("");

  useEffect(() => {
    setTitleTask(task.title);
  }, [task.title]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    task.title = titleTask;
    dispatch(taskAction.update(task));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleStep === "") {
      return;
    }
    const step = {
      title: titleStep,
      taskId: task.id,
    };
    dispatch(stepAction.create(step));
  };

  const handleChangeStatusStep = (step) => {};
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
          <form onSubmit={handleUpdateTask}>
            <input
              type="text"
              className="input-detailTask font-weight-bold"
              value={titleTask || ""}
              onChange={(e) => setTitleTask(e.target.value)}
            />
          </form>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-step"
            placeholder="Add step"
            value={titleStep || ""}
            onChange={(e) => setTitleStep(e.target.value)}
          />
        </form>
        <div style={{ color: "#4f4f50" }}>
          {!!task.steps &&
            task.steps.map((item) => (
              <div key={item.id} className="step-item">
                <input
                  type="checkbox"
                  className="mr-3"
                  title="Đánh dấu là đã hoàn thành"
                  checked={item.isComplete}
                  onChange={() => handleChangeStatusStep(item)}
                />
                <span>{item.title}</span>
                <button className="btn-deleteStep">
                  <Icon>close</Icon>
                </button>
              </div>
            ))}
        </div>
      </div>
      {/* <div className="box-item-right update-dueDate p-2 bg-white"></div> */}
      <div className="box-item-right note p-2 bg-white">
        <form>
          <textarea className="input-note"></textarea>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
