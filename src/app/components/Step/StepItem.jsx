import React, { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";
import { Icon } from "@material-ui/core";
//import * as stepAction from "../../actions/stepAction";
const StepItem = (props) => {
  const [stepTitle, setStepTitle] = useState("");
  useEffect(() => {
    setStepTitle(props.step.title);
  }, [props.step.title]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if(stepTitle === ""){
      return;
    }
  };

  const handleChangeStatusStep = (step) => {};

  return (
    <div className="step-item">
      <input
        type="checkbox"
        className="mr-3"
        title="Đánh dấu là đã hoàn thành"
        checked={props.step.isComplete}
        onChange={() => handleChangeStatusStep(props.step.item)}
      />
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className="step-title"
          value={stepTitle || ""}
          onChange={(e) => setStepTitle(e.target.value)}
        />
      </form>
      <button className="btn-deleteStep">
        <Icon>close</Icon>
      </button>
    </div>
  );
};

export default StepItem;
