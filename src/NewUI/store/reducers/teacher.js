import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeClass: null,
    activeSem: null,
    activeClassStudentValuesIndex: null,
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

const updateClassStudentValues = (state, action) => {
    let i;
    let tempClass = [...state.classStudentValues];
    /*for (i=0;i<state.classStudentValues.length; i++){
        if ((state.classStudentValues[i].classId === state.activeClass) && (state.classStudentValues[i].sem === state.activeSem)){
            let tempClassStudent = [...tempClass[i].data];
            if (action.Type === 'asmnt'){
                tempClassStudent[action.index].test = action.value;
            } else if(action.Type === 'pract'){
                tempClassStudent[action.index].practical = action.value;
            }
            tempClass[i] = {classId: state.activeClass, sem: state.activeSem, data: tempClassStudent};
            break;
        }
    }*/
    let tempClassStudent = [...tempClass[state.activeClassStudentValuesIndex].data];
    if (action.Type === 'asmnt'){
        tempClassStudent[action.index].test = action.value;
    } else if(action.Type === 'pract'){
        tempClassStudent[action.index].practical = action.value;
    }
    tempClass[state.activeClassStudentValuesIndex] = {classId: state.activeClass, sem: state.activeSem, data: tempClassStudent};
    return updateObject(state, {classStudentValues: tempClass})
};

const resetStates = (state, action) => {
    return updateObject(state, {activeComponent: 'mainPage', activeClass: null, classes: [], classStudentValues: []})
};

const setActiveClassStudentIndex = (state, action) => {
    return updateObject(state, {activeClassStudentValuesIndex: action.value})
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_TEACHER_ACTIVE_COMPONENT: return setActiveComponent(state, action);
        case actionTypes.SET_TEACHER_ACTIVE_CLASS: return setActiveClass(state, action);
        case actionTypes.SET_TEACHER_CLASSES: return setTeacherClasses(state, action);
        case actionTypes.RESET_DEFAULTS_TEACHER: return resetStates(state, action);
        case actionTypes.SET_CLASS_STUDENT_VALUES: return setClassStudentValues(state, action);
        case actionTypes.UPDATE_CLASS_STUDENT_VALUES: return updateClassStudentValues(state, action);
        case actionTypes.SET_ACTIVE_CLASS_STUDENT_VALUE_INDEX: return setActiveClassStudentIndex(state, action);
        default:
            return state;
    }
};

export default reducer;