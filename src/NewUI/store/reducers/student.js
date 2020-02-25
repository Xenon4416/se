import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeSem: 's1',
    marks:{},
    subjects:[]
};

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.SET_STUDENT_CURRENT_SEM:
            return{...state,activeSem:action.value}
        case actionTypes.SET_STUDENT_MARKS:
            console.log("Reached here");
            console.log("Reducer",action.value)
            return{...state,marks:action.value}
        case actionTypes.SET_ACTIVE_PAGE:
            console.log("setting page reducer");
            return {...state,activeComponent:action.value}
        case actionTypes.SET_SUBJECTS:
            console.log("subject list");
            return {...state,subjects:action.value}
        default:return state;
    }
}


export default reducer;