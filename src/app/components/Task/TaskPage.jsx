import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import Header from "../Header/Header";
const TaskPage = (props) => {
  const [currentId, setCurrentId] = useState(0);

  const { list } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAction.getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <Header />
      </div>
      <div className="col-md-8">
        <TaskForm {...{ currentId, setCurrentId }} />
        <TaskList tasks={list} />
      </div>
    </div>
  );
};

export default TaskPage;
