import React from 'react';
import './style.scss';
export default function Agree({ children, id, ...rest }) {
    return (
        <div className='agree'>
            <input type='checkbox' id={id} {...rest} />
            <label id={id}>{children}</label>
        </div>
    );
}
