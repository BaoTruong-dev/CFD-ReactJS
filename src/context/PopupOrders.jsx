import React, { createContext, useContext, useState } from 'react';

const PopupOrdersContext = createContext();

export default function PopupOrdersProvider({ children }) {
    const [isShowPopup, setIsShowPopup] = useState(false);
    const showPopupHandle = () => {
        setIsShowPopup(true);
    };
    const hidePopupHandle = () => {
        setIsShowPopup(false);
    };

    return (
        <PopupOrdersContext.Provider value={{
            isShowPopup,
            showPopupHandle,
            hidePopupHandle,
            setIsShowPopup

        }}>
            {children}
        </PopupOrdersContext.Provider>
    );
}

export const usePopup = () => {
    return useContext(PopupOrdersContext);
};
