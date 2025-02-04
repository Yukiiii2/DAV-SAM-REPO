import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
    courses: [],
    messages: [],
    assessments: [],
    currentUser: null,
  },
  mutations: {
    login(state, user) {
      state.currentUser = user;
    },
    logout(state) {
      state.currentUser = null;
    },
    addCourse(state, course) {
      state.courses.push(course);
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
    addAssessment(state, assessment) {
      state.assessments.push(assessment);
    },
  },
});