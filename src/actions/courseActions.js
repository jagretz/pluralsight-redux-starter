import * as ACTIONS from "./actionTypes";

export function createCourse(course) {
  return { type: ACTIONS.CREATE_COURSE, course };
}

export default {
  createCourse
};
