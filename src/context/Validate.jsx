import { createContext, useContext, useEffect, useState } from "react";
import { regexEmail } from "../constant/regex";

const ValidateContext = createContext();
export const ValidateProvider = ({ children }) => {
    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        province: '',
        shippingMethod: '',
        paymentMethod: '',
        note: '',
        agreeEmail: '',
        agreePolicy: '',
    });
    const [errorFields, setErrorFields] = useState({});
    // useEffect(() => {
    //     const errorObj = {};
    //     let keyfields = Object.keys(fields);
    //     for (let i = 0; i < keyfields.length; i++) {
    //         if (!fields[keyfields[i]].trim()) {
    //             errorObj[keyfields[i]] = 'Please fill this field';
    //         }
    //     };
    //     if (!errorObj.emailAddress) {
    //         if (!regexEmail.test(fields.emailAddress)) {
    //             errorObj.emailAddress = 'Your email is not in correct format';
    //         }
    //     }
    //     setErrorFields(errorObj);
    // });
    const handleValidate = () => {
        const errorObj = {};
        let keyfields = Object.keys(fields);
        for (let i = 0; i < keyfields.length; i++) {
            if (!fields[keyfields[i]].trim()) {
                errorObj[keyfields[i]] = 'Please fill this field';
            }
        };
        if (!errorObj.emailAddress) {
            if (!regexEmail.test(fields.email)) {
                errorObj.email = 'Your email is not in correct format';
            }
        }
        setErrorFields(errorObj);
        return errorObj;
    };

    return (
        <ValidateContext.Provider value={
            {
                errorFields,
                fields,
                setFields,
                setErrorFields,
                handleValidate,
            }
        }>
            {children}
        </ValidateContext.Provider>
    );
};

export const useValidate = () => {
    return useContext(ValidateContext);
};