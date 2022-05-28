const initialValue = {
    checked: false
};

const loadingReducer = (state = initialValue, action) => {
    switch (action?.type) {
        case 'LOADING_CHECKED':
            return {
                ...initialValue,
                checked: action.payload
            };
    }
    return state;
};
export default loadingReducer;