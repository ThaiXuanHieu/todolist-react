import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as stepAction from "../../actions/stepAction";
import StepItem from "./StepItem";

const Step = (props) => {
  const [titleStep, setTitleStep] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleStep === "") {
      return;
    }
    const step = {
      title: titleStep,
      taskId: props.taskId,
    };

    dispatch(stepAction.create(step));
    setTitleStep("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-step"
          placeholder="Add step"
          value={titleStep || ""}
          onChange={(e) => setTitleStep(e.target.value)}
        />
      </form>
      <div style={{ color: "#4f4f50" }}>
        {!!props.steps &&
          props.steps.map((item) => <StepItem key={item.id} step={item} />)}
      </div>
    </div>
  );
};

export default Step;
