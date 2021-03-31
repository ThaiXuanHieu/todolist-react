import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import * as stepAction from "../../actions/stepAction";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import TaskDetail from "./TaskDetail";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@material-ui/core";

const TaskPage = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { list, task } = useSelector((state) => state.task);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(taskAction.getTasks(user.id));
    dispatch(stepAction.getSteps());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="task-page">
      <div className="text-center">
        <Header />
      </div>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-left col-md-2 p-0">
            <SideBar />
          </div>
          <div
            className={isShow ? "col-center col-md-7" : "col-center col-md-10"}
            style={{ backgroundColor: "white", height: "100%" }}
          >
            <div className="task-toolBar d-flex justify-content-between">
              <h5 className="m-3" style={{ color: "#3e69e4" }}>
                Tasks
              </h5>
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className="btn-toolBar"
                style={{ color: "#3e69e4" }}
              >
                <Icon>sort</Icon>
                Sắp xếp
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: "100" }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                      borderRadius: "0px",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <p
                            className="text-center"
                            style={{ outline: "none" }}
                          >
                            Sắp xếp theo
                          </p>
                          <hr />
                          <MenuItem onClick={handleClose}>
                            <FontAwesomeIcon
                              icon="star"
                              style={{ color: "#767678", marginRight: "10px" }}
                            />
                            Tầm quan trọng
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <FontAwesomeIcon
                              icon="calendar"
                              style={{ color: "#767678", marginRight: "10px" }}
                            />
                            Ngày đến hạn
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <TaskForm />
            <TaskList
              tasks={list}
              handleClickItem={() => setIsShow(true)}
              deleteItem={() => setIsShow(false)}
            />
          </div>
          <div className="col-right col-md-3 p-0">
            {isShow && <TaskDetail />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
