const initialState = {

};

const orderDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {
                ...action.payload
            };
    }
    return state;
};

export default orderDetailReducer;