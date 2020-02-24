import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    activeComponent: 'mainPage',
    activeSem: 's1',
    marks:{}
};

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.SET_STUDENT_CURRENT_SEM:
            return{...state,...action.values}
        case actionTypes.SET_STUDENT_MARKS:
            console.log("Reached here");
            console.log("Reducer",action.value)
            return{...state,marks:action.value}
        default:return state;
    }
}


export default reducer;