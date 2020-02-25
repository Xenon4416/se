import * as actionTypes from './actionTypes';
import * as uris from '../uris';

export const setActiveComponent = (comp) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_COMPONENT,
        value: comp
    }
};

export const setTeacherValues = (value) => {
    return {
        type: actionTypes.SET_ADMIN_TEACHER_VALUES,
        value: value
    }
};

export const setActiveTeacher = (teacher) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_TEACHER,
        teacher: teacher
    }
};

export const setTeachers = (values) => {
    return {
        type: actionTypes.SET_ADMIN_TEACHERS,
        value: values
    }
};

export const resetAdminState = () => {
    return {
        type: actionTypes.RESET_DEFAULTS_TEACHER
    }
};