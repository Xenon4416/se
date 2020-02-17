const initialState = {
    displayMode: 'SignIn',
    isLoggedIn: false,
    isAuth: false,
    name:"",
    token:localStorage.getItem('token')
};

const loginReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
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
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                isAuth:true

            }
    }
    return state;
};

export default loginReducer;