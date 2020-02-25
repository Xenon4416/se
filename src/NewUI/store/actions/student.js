import * as actionTypes from './actionTypes';



export const setCurrentSem=(sem)=>{
    console.log("In sem action:",sem);
    return {
        type:actionTypes.SET_STUDENT_CURRENT_SEM,
        value:sem
    }
}

export const setStudentMarks=(marks)=>{
    console.log("in action",marks);
    return {
        type:actionTypes.SET_STUDENT_MARKS,
        value:marks
    }
}

export const setActivePage=(page)=>{
    console.log("in componentt action:",page);
    return {
        type:actionTypes.SET_ACTIVE_PAGE,
        value:page
    }
}

export const setSubjects=(subjects)=>{
    console.log("in subject action",subjects);
    return {
        type:actionTypes.SET_SUBJECTS,
        value:subjects
    }
}