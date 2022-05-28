import { Navigate } from "react-router-dom";
import store from "../store";

const withLogin = (Component) => {
    const { auth: { login } } = store.getState();
    if (login) {
        return <Component />;
    }
    return <Navigate to="/" />;
};

export default withLogin;