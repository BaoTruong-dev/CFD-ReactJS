import { Navigate } from "react-router-dom";
import store from "../store";

const withNoLogin = (Component) => {
    const { auth: { login } } = store.getState();
    if (login) {
        return <Navigate to="/" />;
    }
    return <Component />;

};

export default withNoLogin;