import StepService from "../../services/stepService";

export const STEP_ACTION_TYPES = {
    CREATE: "STEP/CREATE",
    UPDATE: "STEP/UPDATE",
    DELETE: "STEP/DELETE",
    GET_ALL: "STEP/GET_ALL",
    GET_BY_ID: "STEP/GET_BY_ID",
  };
  
  export const create = (newTask) => (dispatch) => {
    return StepService.create(newTask)
      .then((response) => {
        dispatch({
          type: STEP_ACTION_TYPES.CREATE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error,
        });
      });
  };