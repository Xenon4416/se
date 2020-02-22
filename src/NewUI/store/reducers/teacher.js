import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeClass: null,
    activeSem: null,
    classes: [], /*[{batch: 'dfsd', subCode:'adaf', subName:'asdas', group:"dfsd"}]*/
    classStudentValues: []
};

const setActiveComponent = (state, action) => {
    return updateObject(state, {activeComponent: action.value});
};

const setActiveClass = (state, action) => {
    return updateObject(state, {activeClass: action.Class, activeSem: action.sem});
};

const setTeacherClasses = (state, action) => {
    return updateObject(state, {classes: action.value})
};

const setClassStudentValues = (state, action) => {
    return {
        ...state,
        classStudentValues: [...state.classStudentValues, action.value]
    }
};

const resetStates = (state, action) => {
    return updateObject(state, {activeComponent: 'mainPage', activeClass: null, classes: [], classStudentValues: []})
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_TEACHER_ACTIVE_COMPONENT: return setActiveComponent(state, action);
        case actionTypes.SET_TEACHER_ACTIVE_CLASS: return setActiveClass(state, action);
        case actionTypes.SET_TEACHER_CLASSES: return setTeacherClasses(state, action);
        case actionTypes.RESET_DEFAULTS_TEACHER: return resetStates(state, action);
        case actionTypes.SET_CLASS_STUDENT_VALUES: return setClassStudentValues(state, action);
        
        default:
            return state;
    }
};

export default reducer;