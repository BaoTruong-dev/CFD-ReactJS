import { Navigate, Route } from "react-router-dom";
import withLogin from "../hocs/withLogin";
import withNoLogin from "../hocs/withNoLogin";
import store from "../store";

const routerConfig = (routers) => {
    const { auth: { login } } = store.getState();
    const list = [];
    // withLogin();
    routers.forEach((e) => {
        let { path, element: Component, routes, index, auth } = e;
        let child = null;
        if (routes) {
            child = routerConfig(routes);
        }
        if (typeof auth === 'undefined') {
            list.push(<Route index={index} key={Component} path={path} element={<Component />}>{child}</Route>);
        } else if (auth) {
            list.push(<Route index={index} key={Component} path={path} element={login == auth ? <Component /> : <Navigate to="/" />}>{child}</Route>);
        } else {
            list.push(<Route index={index} key={Component} path={path} element={login == auth ? <Component /> : <Navigate to="/" />}>{child}</Route>);
        }
    });
    return list;
};

export default routerConfig;