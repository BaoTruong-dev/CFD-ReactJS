import React from 'react';
import './style.scss';
export default function Quote({ src, content, name }) {
    return (
        <div className='quote'>
            <p className='content'>
                {content}
            </p>
            <p className='name'>{name}</p>
            <div className='img'>
                <img src={src} />
            </div>
        </div>
    );
}
