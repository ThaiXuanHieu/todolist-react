import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import * as stepAction from "../../actions/stepAction";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import TaskDetail from "./TaskDetail";
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
              <button className="btn-toolBar">
                <Icon>sort</Icon> Sort
              </button>
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
