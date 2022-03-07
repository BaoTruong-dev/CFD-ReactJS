const initialState = {
    data: [

    ]
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return action.payload;
    }
    return state;
};

export default productsReducer;
