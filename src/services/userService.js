import { API } from "../constant/api";
import callApiWithToken from "../utilities/callApiWithToken";
const userService = {
    getInfo() {
        return callApiWithToken(`${API}/user/get-info`);
    },
    updateInfo(data) {
        return callApiWithToken(`${API}/user/update`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }
};

export default userService;