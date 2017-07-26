import * as actionTypes from "./actionTypes";
import courseApi from "../api/mockCourseApi.js";

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

/**
 * Utilizing redux-thunk and a mock api, load all courses.
 */
export function loadCourses() {
  // This utilizes a mock api but but in a real-world app you will probably make a fetch call or a xhr request.
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
    };
}

export default {
  loadCourses
};
