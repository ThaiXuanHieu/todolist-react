import TaskService from "../../services/taskService";

export const TASK_ACTION_TYPES = {
  CREATE: "TASK/CREATE",
  UPDATE: "TASK/UPDATE",
  DELETE: "TASK/DELETE",
  GET_ALL: "TASK/GET_ALL",
  GET_BY_ID: "TASK/GET_BY_ID",
};

export const getTasks = () => (dispatch) => {
  return TaskService.getTasks()
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.GET_ALL,
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

export const getTask = () => (dispatch) => {
  return TaskService.getTask()
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.GET_BY_ID,
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

export const create = (newTask) => (dispatch) => {
  return TaskService.create(newTask)
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.CREATE,
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

export const remove = (id) => (dispatch) => {
  return TaskService.remove(id)
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.DELETE,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    });
};
