import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
import { GetDate } from "../../utils/formatDate";
import Icon from "@material-ui/core/Icon";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const TaskList = (props) => {
  const [currentTaskId, setCurrentTaskId] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (task) => {
    task.isComplete = !task.isComplete;
    dispatch(taskAction.update(task));
  };

  const loadTaskDetail = (id) => {
    dispatch(taskAction.getTask(id));
  };
  const handleClick = (e, data) => {
    dispatch(taskAction.remove(data.taskId));
  };

  const handleRightClick = (e, taskId) => {
    e.preventDefault();
    setCurrentTaskId(taskId);
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
            <ContextMenuTrigger id="context-menu">
              <button
                className="btn-taskItem"
                onClick={() => loadTaskDetail(item.id)}
                onContextMenu={(e) => handleRightClick(e, item.id)}
              >
                <span className="title">{item.title}</span>
                {item.steps.length > 0 ? (
                  <p className="step-completed">
                    {item.steps.filter((x) => x.isComplete === true).length +
                      " "}
                    trên {item.steps.length}
                  </p>
                ) : (
                  ""
                )}
              </button>
            </ContextMenuTrigger>
            <span className="dueDate">
              {!item.dueDate ? item.dueDate : GetDate(item.dueDate)}
            </span>
          </div>
        ))}
        {!!taskCompleted.length && (<h6 style={{ marginTop: "15px" }}>Đã hoàn thành</h6>)}
        {taskCompleted.map((item) => (
          <div key={item.id} className="taskItem d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              title="Đánh dấu là đã hoàn thành"
              checked={item.isComplete}
              onChange={() => handleChange(item)}
            />
            <ContextMenuTrigger id="context-menu">
              <button
                className="btn-taskItem"
                onClick={() => loadTaskDetail(item.id)}
                onContextMenu={(e) => handleRightClick(e, item.id)}
              >
                <del className="title">{item.title}</del>
                {item.steps.length > 0 ? (
                  <p className="step-completed">
                    {item.steps.filter((x) => x.isComplete === true).length +
                      " "}
                    trên {item.steps.length}
                  </p>
                ) : (
                  ""
                )}
              </button>
            </ContextMenuTrigger>
            <span className="dueDate">
              {!item.dueDate ? item.dueDate : GetDate(item.dueDate)}
            </span>
          </div>
        ))}
        <ContextMenu id="context-menu">
          <MenuItem data={{ taskId: currentTaskId }}>
            <span>Add to...</span>
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            data={{ taskId: currentTaskId }}
            onClick={handleClick}
            className="text-danger"
          >
            <Icon>delete</Icon> <span>Delete task</span>
          </MenuItem>
        </ContextMenu>
      </div>
    );
  };

  return <div>{renderTasks()}</div>;
};

export default TaskList;
