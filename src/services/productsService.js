import { API } from "../constant/api";
const productsService = {
    products() {
        return fetch(`${API}/product`).then(res => res.json());
    },
};
export default productsService;