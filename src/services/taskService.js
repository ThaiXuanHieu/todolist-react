import api from "./api";

const TASK_BASE_URL = "Tasks";

export const getTasks = async (userId) => {
  let data;
  await api
    .get(`Users/${userId}/tasks`)
    .then((res) => {
      data = res;
    })
    .catch((error) => {
      if (error.response) {
        data = error.response;
      }
    });

  return data;
};

export const getTask = async (id) => {
  let response;
  await api
    .get(`${TASK_BASE_URL}/${id}`)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      if (error.response) {
        response = error.response;
      }
    });
  return response;
};

export const search = async (userId, searchString) => {
  let response;
  await api
    .get(`Users/${userId}/tasks/${searchString}`)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      if (error.response) {
        response = error.response;
      }
    });
  return response;
};

export const create = async (newTask) => {
  let data;
  await api
    .post(`${TASK_BASE_URL}`, newTask)
    .then((res) => {
      data = res;
    })
    .catch((error) => {
      if (error.response) {
        data = error.response;
      }
    });
  return data;
};

export const update = async (updateTask) => {
  let data;
  await api
    .put(`${TASK_BASE_URL}/${updateTask.id}`, updateTask)
    .then((res) => {
      data = res;
    })
    .catch((error) => {
      if (error.response) {
        data = error.response;
      }
    });
  return data;
};

export const remove = async (id) => {
  let response = null;
  await api
    .delete(`${TASK_BASE_URL}/${id}`)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      if (error.response) {
        response = error.response;
      }
    });
  return response;
};

export const updateStatus = async (id, isComplete) => {
  let response = null;
  await api
    .patch(`${TASK_BASE_URL}/${id}/${isComplete}`)
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      if (error.response) {
        response = error.response;
      }
    });
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTasks,
  getTask,
  create,
  remove,
  updateStatus,
  update,
  search
};
