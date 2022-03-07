const initialState = {

};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_SUCCESSFUL':
            return {
                ...state,
                ...action.payload
            };
    }
};

export default orderReducer;