import { API } from "../constant/api";

const initialValue = {

};
const productDetailsService = {
    productsDetail(id) {
        return fetch(`${API}/product/${id}`).then(res => res.json());
    }
};


export default productDetailsService;