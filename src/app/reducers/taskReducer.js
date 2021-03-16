import { TASK_ACTION_TYPES } from "../actions/taskAction";

const initialState = {
  list: [],
  task: [],
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

    case TASK_ACTION_TYPES.UPDATE_STATUS:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    case TASK_ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
        task: [],
      };

    case TASK_ACTION_TYPES.GET_BY_ID:
      return {
        ...state,
        list: [...state.list],
        task: action.payload,
      };

    case TASK_ACTION_TYPES.DELETE:
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};
