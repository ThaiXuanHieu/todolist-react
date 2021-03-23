import React from "react";
import { useDispatch } from "react-redux";
// import taskService from "../../../../services/taskService";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
import { GetDate } from "../../utils/formatDate";

const TaskList = (props) => {
  const dispatch = useDispatch();

  const handleChange = (task) => {
    task.isComplete = !task.isComplete;
    dispatch(taskAction.update(task));
  };

  const loadTaskDetail = (id) => {
    dispatch(taskAction.getTask(id));
  };

  const renderTasks = () => {
    const taskCompleted = props.tasks.filter(
      (item) => item.isComplete === true
    );

    const taskInComplete = props.tasks.filter(
      (item) => item.isComplete === false
    );

    return (
      <div>
        {taskInComplete.map((item) => (
          <div key={item.id} className="taskItem d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              title="Đánh dấu là đã hoàn thành"
              checked={item.isComplete}
              onChange={() => handleChange(item)}
            />
            <button
              className="btn-taskItem"
              onClick={() => loadTaskDetail(item.id)}
            >
              <span className="title">{item.title}</span>
            </button>
            <span className="dueDate">
              {!item.dueDate ? item.dueDate : GetDate(item.dueDate)}
            </span>
          </div>
        ))}
        <h6 style={{marginTop: "15px"}}>Đã hoàn thành</h6>
        {taskCompleted.map((item) => (
          <div key={item.id} className="taskItem d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              title="Đánh dấu là đã hoàn thành"
              checked={item.isComplete}
              onChange={() => handleChange(item)}
            />
            <button
              className="btn-taskItem"
              onClick={() => loadTaskDetail(item.id)}
            >
              <del className="title">{item.title}</del>
            </button>
            <span className="dueDate">
              {!item.dueDate ? item.dueDate : GetDate(item.dueDate)}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderTasks()}</div>;
};

export default TaskList;
