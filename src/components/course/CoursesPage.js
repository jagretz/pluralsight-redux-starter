import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  /**
   * Creates an instance of CoursesPage.
   * Initialize state and bind functions.
   */
  constructor(props, context) {
    super(props, context);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  /**
   * Ideally, from within the render func, container components just call child components
   * that contain the template markup.
   */
  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired, Not necessary if using `connects` `mapDispatchToProps`
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * @param {any} state the state within our redux store
 * @param {any} ownProps Access to props attached to this component
 * @return {object} the properties we want exposed on our component.
 */
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

/**
 * Determines _what_ actions you want exposed to your component.
 * Omission of this function tells the connect function to auto inject the dispatch function with
 * this.props.dispatch().
 * Takes a single arg, `dispatch`, and returns an object containing the available actions on this
 * component.
 */
function mapDispatchToProps(dispatch) {
  return {
    // Wraps the action creator in a call to dispatch making it available as a function on the
    // component's `props` param.
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
