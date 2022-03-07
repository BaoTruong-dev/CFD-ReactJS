const initialState = {
    login: false,
    user: null,
    message: ''
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return {
                login: true,
                user: action.payload
            };
        case 'FAILED_REGISTER':
            return {
                ...initialState,
                message: action.error
            };
        case 'LOGOUT':
            return {
                ...initialState
            };
    }
    return state;
};

export default authReducer;