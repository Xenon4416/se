import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeTeacher: null,
    activeTeacherValuesIndex: null,
    teachers: [],
    teacherValues: []
};

const setActiveComponent = (state, action) => {
    return updateObject(state, {activeComponent: action.value});
};

const setTeachers = (state, action) => {
    return updateObject(state, {teachers: action.value})
};

const setActiveTeacher = (state, action) => {
    return updateObject(state, {activeTeacher: action.teacher});
};

const setTeacherValues = (state, action) => {
    return {
        ...state,
        teacherValues: [...state.classStudentValues, action.value]
    }
};

const resetStates = (state, action) => {
    return updateObject(state, {activeComponent: 'mainPage', activeTeacher: null, teachers: [], teacherValues: []})
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ADMIN_TEACHERS: return setTeachers(state, action);
        case actionTypes.SET_ADMIN_TEACHER_VALUES: return setTeacherValues(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_COMPONENT: return setActiveComponent(state, action);
        case actionTypes.RESET_DEFAULTS_ADMIN: return resetStates(state, action);
        case actionTypes.SET_ADMIN_ACTIVE_TEACHER: return setActiveTeacher(state, action);
        default:
            return state;
    }
};

export default reducer;
