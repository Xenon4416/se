import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeTeacher: null,
    activeClass: null,
    activeSem: null,
    activeGroup: null,
    activeTeacherClassesIndex: null,
    activeTeacherClassesStudentListIndex: null,
    teachers: [],
    teacherClasses: [],
    teacherClassesStudentList: []
};

const setActiveComponent = (state, action) => {
    return updateObject(state, {activeComponent: action.value});
};

const setActiveClass = (state, action) => {
    return updateObject(state, {activeClass: action.Class, activeSem: action.sem, activeGroup: action.group});
};

const setTeachers = (state, action) => {
    return updateObject(state, {teachers: action.value})
};

const setTeacherClassesStudentList = (state, action) => {
    let tempClasses = [...state.teacherClassesStudentList];
    let tempClassStudents = [...tempClasses[state.activeTeacherClassesIndex]];
    tempClassStudents = [...tempClassStudents, action.value];
    tempClasses[state.activeTeacherClassesIndex] = tempClassStudents;
    return {
        ...state,
        teacherClassesStudentList: tempClasses
    }
};

const setActiveTeacher = (state, action) => {
    return updateObject(state, {activeTeacher: action.teacher});
};

const setActiveTeacherClassesIndex = (state, action) => {
    return updateObject(state, {activeTeacherClassesIndex: action.value})
};

const setActiveTeacherClassesStudentListIndex = (state, action) => {
    return updateObject(state, {activeTeacherClassesStudentListIndex: action.value})
};

const setTeacherClasses = (state, action) => {
    return {
        ...state,
        teacherClasses: [...state.teacherClasses, action.value],
        teacherClassesStudentList: [...state.teacherClassesStudentList, []]
    }
};

const resetStates = (state, action) => {
    return updateObject(state, {...initialState})
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ADMIN_TEACHERS: return setTeachers(state, action);
        case actionTypes.SET_ADMIN_TEACHER_CLASSES: return setTeacherClasses(state, action);
        case actionTypes.SET_ADMIN_TEACHER_CLASSES_STUDENT_LIST: return setTeacherClassesStudentList(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_COMPONENT: return setActiveComponent(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_CLASS: return setActiveClass(state, action);
        case actionTypes.RESET_DEFAULTS_ADMIN: return resetStates(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_TEACHER: return setActiveTeacher(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_TEACHER_CLASSES_INDEX: return setActiveTeacherClassesIndex(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_TEACHER_CLASSES_STUDENT_LIST_INDEX: return setActiveTeacherClassesStudentListIndex(state, action);
        default:
            return state;
    }
};

export default reducer;
