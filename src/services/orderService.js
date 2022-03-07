import callApiWithToken from "../utilities/callApiWithToken";
import { API } from "../constant/api";
const orderService = {
    order(action) {
        return callApiWithToken(`${API}/ecommerce/v1/order`, {
            method: 'POST',
            body: JSON.stringify(action.payload)
        });
    }
};

export default orderService;