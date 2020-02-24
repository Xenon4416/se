import * as actionTypes from './actionTypes';



export const setCurrentSem=(sem)=>{
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