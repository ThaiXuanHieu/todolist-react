import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import Header from "../Header/Header";


const TaskPage = (props) => {

  const { list, task } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(taskAction.getTasks(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <Header />
      </div>
      <div className="col-md-8">
        <TaskForm task={task} />
        <TaskList tasks={list} />
      </div>
    </div>
  );
};

export default TaskPage;
