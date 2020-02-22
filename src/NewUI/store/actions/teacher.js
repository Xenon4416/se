import * as actionTypes from './actionTypes';

export const setActiveComponent = (comp) => {
    return {
        type: actionTypes.SET_TEACHER_ACTIVE_COMPONENT,
        value: comp
    }
};

export const setActiveClass = (Class, sem) => {
    return {
        type: actionTypes.SET_TEACHER_ACTIVE_CLASS,
        Class: Class,
        sem: sem
    }
};

export const setClassStudentValues = (value) => {
    return {
        type: actionTypes.SET_CLASS_STUDENT_VALUES,
        value: value
    }
};

export const resetTeacherState = () => {
    return {
        type: actionTypes.RESET_DEFAULTS_TEACHER
    }
};

export const setClasses = (values) => {
    return {
        type: actionTypes.SET_TEACHER_CLASSES,
        value: values
    }
};