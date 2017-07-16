import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootRedcuer = combineReducers({
  // Attention!
  // The names you provide to your reducers here matters!
  courses
});

export default rootRedcuer;
