const initialState = {
    displayMode: 'SignIn',
    username: null,
    password: null,
    isAuth: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USRNM_CHNG':
            return {
                ...state,
                username: action.value
            };
        case 'PASSWRD_CHNG':
            return{
                ...state,
                password: action.value
            };
        case 'SUBMIT':
            return{
                ...state,
                password: action.value
            };
    }
    return state;
};

export default loginReducer;