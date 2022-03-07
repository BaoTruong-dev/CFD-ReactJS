import './style.scss';

import React from 'react';

export default function Textarea({ id, placeholder, label, ...textarea }) {
    return (
        <div className='textarea'>
            <label for={id}>
                {label}
            </label>
            <textarea id={id} rows="1" cols="1" placeholder={placeholder} {...textarea}></textarea>
        </div>
    );
}
