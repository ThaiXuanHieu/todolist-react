import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@material-ui/core";
import * as stepAction from "../../actions/stepAction";
const TaskDetail = (props) => {
  const { list, task } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const step = {
        title: title,
        taskId: task.id
    }
    dispatch(stepAction.create(step));
  };

  const handleChange = (id, isComplete) => {};

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
          />
          <input
            type="text"
            className="input-detailTask"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" className="input-step" placeholder="Add step" />
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
                  onChange={() => handleChange(item.id, item.isComplete)}
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
