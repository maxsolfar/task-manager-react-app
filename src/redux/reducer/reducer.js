import {
  GET_PROJECTS,
  LOGIN,
/*   GET_PROJECT_BY_ID,
  GET_TASKS_BY_PROJECT,
  GET_TASKS,
  GET_TASK_BY_ID,
  POST_PROJECT,
  POST_TASK,
  REGISTER,
  UPDATE_PROJECT,
  UPDATE_TASK,
  DELETE_PROJECT,
  DELETE_TASK, */
} from "../actions/actions";


const initialState = {
  projects: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state
      };  
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    default:
      return state;
  }
}