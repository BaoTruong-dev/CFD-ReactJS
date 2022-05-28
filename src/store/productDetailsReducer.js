const initialValue = {};

const productDetailsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'PRODUCT_DETAILS':
            return action.payload;
    }
    return state;
};
export default productDetailsReducer;