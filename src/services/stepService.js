import api from "./api";

const STEP_BASE_URL = "Steps";

export const create = async (step) => {
  let data;
  await api
    .post(`${STEP_BASE_URL}`, step)
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

export const getByTaskId = async (taskId) => {
  let data;
  await api
    .get(`${STEP_BASE_URL}/${taskId}/steps`)
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

export const update = async (step) => {
  let data;
  await api
    .put(`${STEP_BASE_URL}/${step.id}`, step)
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  update,
  getByTaskId,
};
