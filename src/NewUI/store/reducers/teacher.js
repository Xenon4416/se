import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    activeComponent: 'mainPage'
};

const setActiveComponent = (state, action) => {
    return updateObject(state, {activeComponent: action.component});
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.SET_TEACHER_ACTIVE_COMPONENT: return setActiveComponent(state, action);
        default:
            return state;
    }
};

export default reducer;