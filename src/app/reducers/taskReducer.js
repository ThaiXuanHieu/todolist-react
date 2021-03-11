import { TASK_ACTION_TYPES } from "../actions/taskAction";

const initialState = {
  list: [],
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ACTION_TYPES.GET_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    case TASK_ACTION_TYPES.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case TASK_ACTION_TYPES.GET_BY_ID:
      return {};

    case TASK_ACTION_TYPES.DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};
