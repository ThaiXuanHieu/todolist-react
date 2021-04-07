import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as taskAction from "../../actions/taskAction";
import "./style.css";
//import firebaseDb from "../../firebase";

const TaskForm = (props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const { list } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (title === "") {
      return;
    }
    const task = {
      id: id,
      title: title,
      createdBy: user.id,
    };

    if (!list.some((item) => item.isImportant === false)) {
      task.isImportant = true;
    }

    dispatch(taskAction.create(task))
      .then(() => {
        setId(0);
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });

    // firebaseDb.child("Tasks").push(
    //   {
    //     id: list.pop().id + 1,
    //     title: title,
    //     createdBy: user.id,
    //     dueDate: null,
    //   },
    //   (err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //   }
    // );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <input
          type="text"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
          placeholder="Thêm tác vụ"
        />
      </div>
    </form>
  );
};

export default TaskForm;
