let token = JSON.parse(localStorage.getItem('token'));

const initialState = {
    login: !!token,
    user: null,
    message: ''
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                ...state,
                login: true,
                user: action.payload
            };
        case 'FAILED_REGISTER':
            return {
                ...state,
                message: action.error
            };
        case 'LOGOUT':
            return {
                ...state,
                login: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;