import React from 'react';
import './style.scss';
export default function Agree({ children, id, ...rest }) {
    return (
        <div className='agree'>
            <input type='checkbox' id={id} {...rest} />
            <label for={id}>{children}</label>
        </div>
    );
}
