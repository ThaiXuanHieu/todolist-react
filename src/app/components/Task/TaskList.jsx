import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
import { GetDate } from "../../utils/formatDate";
import Icon from "@material-ui/core/Icon";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const TaskList = (props) => {
  const [currentTask, setCurrentTask] = useState({
    taskId: 0,
    title: "",
  });

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (task) => {
    task.isComplete = !task.isComplete;
    dispatch(taskAction.update(task));
  };

  const loadTaskDetail = (id) => {
    props.handleClickItem();
    dispatch(taskAction.getTask(id));
  };
  const handleClickDelete = (id) => {
    dispatch(taskAction.remove(id));
    setOpen(false);
    props.deleteItem();
  };

  const handleRightClick = (e, task) => {
    e.preventDefault();
    setCurrentTask({
      taskId: task.id,
      title: task.title,
    });
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
                onContextMenu={(e) => handleRightClick(e, item)}
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
        {!!taskCompleted.length && (
          <h6 style={{ marginTop: "15px", marginLeft: "10px" }}>Completed</h6>
        )}
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
                onContextMenu={(e) => handleRightClick(e, item)}
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
          <MenuItem>
            <span>Add to...</span>
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            data={{ taskId: currentTask.id, title: currentTask.title }}
            onClick={handleClickOpen}
            className="text-danger"
          >
            <Icon>delete</Icon> <span>Delete task</span>
          </MenuItem>
        </ContextMenu>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            "{currentTask.title}" will be permanently deleted.
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You will not be able to undo this action.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="btn btn-default">
              Cancel
            </button>
            <button
              onClick={() => handleClickDelete(currentTask.taskId)}
              className="btn btn-danger"
            >
              Delete task
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return <div>{renderTasks()}</div>;
};

export default TaskList;
