import { STEP_ACTION_TYPES } from "../actions/stepAction";

const initialState = {
  list: [],
};

export const step = (state = initialState, action) => {
  switch (action.type) {
    case STEP_ACTION_TYPES.GET_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    case STEP_ACTION_TYPES.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case STEP_ACTION_TYPES.GET_BY_TASKID:
      return {
        ...state,
        list: [...action.payload],
      };

    case STEP_ACTION_TYPES.UPDATE:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    default:
      return state;
  }
};
