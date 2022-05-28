import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import url from "./url";

function ScrollToTop() {
    let { pathname } = useLocation();
    let queryObj = url.queryObject();
    useEffect(() => {
        if (pathname == '/productdetail') {
            document.querySelector('body').scrollTo(0, 0);
        };
    }, [queryObj]);
    return null;
}

export default ScrollToTop;