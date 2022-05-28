const initialState = {

};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_SUCCESSFUL':
            return {
                ...action.payload
            };
        case 'GET_ORDER':
            return {
                ...action.payload
            };
    }
    return state;
};

export default orderReducer;