import React, { forwardRef } from 'react';
import { useValidate } from '../../context/Validate';
import './style.scss';

// export default function InputField({ label, type = 'text', placeHolder, name, value, id, children, select, states, field, onChange, ...rest }) {
//     const values = useValidate();
//     return (
//         <div className="inputField">
//             {label && <label htmlFor={id}>{label}</label>}
//             {select ?
//                 <select name={name} id={id} {...rest}>
//                     <option value=''>Choose a state</option>
//                     {states && states.map((state, index) => {
//                         return <option key={state} value={index}>{state.toUpperCase()}</option>;
//                     })}
//                 </select>
//                 :
//                 <input type={type} {...rest} id={id} placeholder={placeHolder} onChange={onChange} />}
//             <p className='error'>{values && values.errorFields[field]}</p>
//         </div>
//     );
// }

const InputField = forwardRef(({ label, type = 'text', placeHolder, name, value, id, children, select, states, field, onChange, ...rest }, ref) => {
    const values = useValidate();
    return (
        <div className="inputField">
            {label && <label htmlFor={id}>{label}</label>}
            {select ?
                <select name={name} id={id} {...rest}>
                    <option value=''>Choose a state</option>
                    {states && states.map((state, index) => {
                        return <option key={state} value={index}>{state.toUpperCase()}</option>;
                    })}
                </select>
                :
                <input type={type} {...rest} id={id} placeholder={placeHolder} onChange={onChange} ref={ref} />}
            <p className='error'>{values && values.errorFields[field]}</p>
        </div>
    );
});
export default InputField;