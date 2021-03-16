import TaskService from "../../services/taskService";

export const TASK_ACTION_TYPES = {
  CREATE: "TASK/CREATE",
  UPDATE: "TASK/UPDATE",
  UPDATE_STATUS: "TASK/UPDATE_STATUS",
  DELETE: "TASK/DELETE",
  GET_ALL: "TASK/GET_ALL",
  SEARCH: "TASK/SEARCH",
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

export const getTask = (id) => (dispatch) => {
  return TaskService.getTask(id)
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

export const search = (searchString) => (dispatch) => {
  return TaskService.search(searchString)
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.SEARCH,
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

export const update = (updateTask) => (dispatch) => {
  return TaskService.update(updateTask)
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.UPDATE,
        payload: response.data,
      });
      //return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: "ERROR",
        payload: error,
      });
      //return Promise.reject();
    });
};

export const updateStatus = (id, isComplete) => (dispatch) => {
  return TaskService.updateStatus(id, isComplete)
    .then((response) => {
      dispatch({
        type: TASK_ACTION_TYPES.UPDATE_STATUS,
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
