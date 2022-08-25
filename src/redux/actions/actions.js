import axios from "axios";

/* GET API*/
export const GET_PROJECTS = "GET_PROJECTS";
export const GET_PROJECT_BY_ID = "GET_PROJECT_BY_ID";
export const GET_TASKS_BY_PROJECT = "GET_TASKS_BY_PROJECT";
export const GET_TASKS = "GET_TASKS";
export const GET_TASK_BY_ID = "GET_TASK_BY_ID";

/* POST API*/
export const POST_PROJECT = "POST_PROJECT";
export const POST_TASK = "POST_TASK";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

/* UPDATE API*/
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const UPDATE_TASK = "UPDATE_TASK";

/* DELETE API*/
export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_TASK = "DELETE_TASK";

function login(info) {
  return async function (dispatch) {
    try {
      const userLogin = await axios.post("/auth/login", info);
      return dispatch({
        type: LOGIN,
        payload: userLogin,
      });
        
    } catch (error) {
      console.log(`Login Error: ${error}`);
    }
  };
}


function getAllProjects() {
  return async function (dispatch) {
    try {
      const allProjects = await axios.get("/projects");
      return dispatch({
        type: GET_PROJECTS,
        payload: allProjects.data,
      });
    } catch (error) {
      console.log(`GetAllProjects ${error}`);
    }
  };
}



export { 
  getAllProjects,
  login
};
