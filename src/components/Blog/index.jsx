import React from 'react';
import './style.scss';
export default function Blog({ large, medium, small, thumbnail, tag, title, avatar, name, date }) {

    return (
        <div className={`blog ${large ? 'large' : ''} ${medium ? 'medium' : ''} ${small ? 'small' : ''}`}>
            <div className='img'>
                <img src={thumbnail} />
            </div>
            {large && <p className='tag'>{tag}</p>}
            <div className='info'>
                {medium && <p className='tag'>{tag}</p>}
                <p className='title'>{title}</p>
                <div className='author'>
                    {large && <div className='avatar'>
                        <img src={avatar} />
                    </div>}
                    <p className='name'>{name}</p>
                    <p className='date'>{date}</p>
                </div>
            </div>
        </div>
    );
}
