import callApiWithToken from "../utilities/callApiWithToken";
import { API } from "../constant/api";
const cartService = {
    getCart() {
        return callApiWithToken(`${API}/ecommerce/v1/cart`);
    },
    updateQuantities(quantity, id) {
        return callApiWithToken(`${API}/ecommerce/v1/cart/quantity/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                quantity
            })
        });
    }
};

export default cartService;