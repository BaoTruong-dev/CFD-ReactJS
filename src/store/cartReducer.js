let initialState = {
    cart: {

    }
};

let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...initialState,
                cart: action.payload
            };
        case 'CLEAR_CART':
            return {
                state
            };
    }
    return state;
};

export default cartReducer;