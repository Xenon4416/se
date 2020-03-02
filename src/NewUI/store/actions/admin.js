import * as actionTypes from './actionTypes';
import * as uris from '../uris';

export const setActiveComponent = (comp) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_COMPONENT,
        value: comp
    }
};

export const setTeacherClasses = (value) => {
    return {
        type: actionTypes.SET_ADMIN_TEACHER_CLASSES,
        value: value
    }
};

export const setTeacherClassesStudentList = (value) => {
    return {
        type: actionTypes.SET_ADMIN_TEACHER_CLASSES_STUDENT_LIST,
        value: value
    }
};

export const setActiveTeacher = (teacher) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_TEACHER,
        teacher: teacher
    }
};

export const setActiveClass = (Class, sem, group) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_CLASS,
        Class: Class,
        sem: sem,
        group: group
    }
};

export const setTeachers = (values) => {
    return {
        type: actionTypes.SET_ADMIN_TEACHERS,
        value: values
    }
};

export const setActiveTeacherClassesIndex = (value) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_TEACHER_CLASSES_INDEX,
        value: value
    }
};

export const setActiveTeacherClassesStudentListIndex = (value) => {
    return {
        type: actionTypes.SET_ADMIN_ACTIVE_TEACHER_CLASSES_STUDENT_LIST_INDEX,
        value: value
    }
};

export const resetAdminState = () => {
    return {
        type: actionTypes.RESET_DEFAULTS_ADMIN
    }
};