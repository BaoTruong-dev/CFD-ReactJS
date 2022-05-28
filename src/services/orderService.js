import callApiWithToken from "../utilities/callApiWithToken";
import { API } from "../constant/api";
const orderService = {
    order(action) {
        return callApiWithToken(`${API}/ecommerce/v1/order`, {
            method: 'POST',
            body: JSON.stringify(action)
        });
    },
    getAllOrder() {
        return callApiWithToken(`${API}/ecommerce/v1/order`);
    },
    getOrderDetail(id) {
        return callApiWithToken(`${API}/ecommerce/v1/order/${id}`);
    },
    removeItem(id) {
        return callApiWithToken(`${API}/ecommerce/v1/cart/remove-item/${id}`, {
            method: 'DELETE'
        });
    }
};

export default orderService;