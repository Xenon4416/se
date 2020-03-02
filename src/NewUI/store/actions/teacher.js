import * as actionTypes from './actionTypes';
import * as uris from '../uris';

export const setActiveComponent = (comp) => {
    return {
        type: actionTypes.SET_TEACHER_ACTIVE_COMPONENT,
        value: comp
    }
};

export const setActiveClass = (Class, sem, group) => {
    return {
        type: actionTypes.SET_TEACHER_ACTIVE_CLASS,
        Class: Class,
        sem: sem,
        group: group
    }
};

export const setActiveStudentIndex = (value) => {
    return {
        type: actionTypes.SET_TEACHER_ACTIVE_CLASS_STUDENT_VALUE_INDEX,
        value: value
    }
};

export const setClassStudentValues = (value) => {
    return {
        type: actionTypes.SET_TEACHER_CLASS_STUDENT_VALUES,
        value: value
    }
};

export const updateClassStudentValues = (value, Type, index) => {
    return {
        type: actionTypes.UPDATE_TEACHER_CLASS_STUDENT_VALUES,
        value: value,
        Type: Type,
        index: index
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

export const submitMarks = (data) => {
    return dispatch => {
        fetch(uris.POST_MARKS,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if(res.status === 'success'){
                    alert("Successfull Submitted Marks!!")
                }
            })
            .catch(err => console.log(err))
    }
};