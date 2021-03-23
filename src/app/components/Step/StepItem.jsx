import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@material-ui/core";
import * as stepAction from "../../actions/stepAction";
const StepItem = (props) => {
  const [stepTitle, setStepTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setStepTitle(props.step.title);
  }, [props.step.title]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (stepTitle === "") {
      return;
    }
    const stepUpdate = {
      id: props.step.id,
      title: stepTitle,
      taskId: props.step.taskId,
      isComplete: props.step.isComplete,
    };
    dispatch(stepAction.update(stepUpdate));
  };

  const handleChangeStatusStep = (step) => {
    step.isComplete = !step.isComplete;
    dispatch(stepAction.update(step));
  };

  const handleDelete = (id) => {
    dispatch(stepAction.remove(id));
  };

  return (
    <div className="step-item">
      <input
        type="checkbox"
        className="mr-3"
        title="Đánh dấu là đã hoàn thành"
        checked={props.step.isComplete}
        onChange={() => handleChangeStatusStep(props.step)}
      />
      <form onSubmit={handleUpdate}>
        {props.step.isComplete ? (
          <input
            type="text"
            className="step-title"
            value={stepTitle || ""}
            onChange={(e) => setStepTitle(e.target.value)}
            style={{ textDecorationLine: "line-through" }}
          />
        ) : (
          <input
            type="text"
            className="step-title"
            value={stepTitle || ""}
            onChange={(e) => setStepTitle(e.target.value)}
          />
        )}
      </form>
      <button
        className="btn-deleteStep"
        onClick={() => handleDelete(props.step.id)}
      >
        <Icon>close</Icon>
      </button>
    </div>
  );
};

export default StepItem;
