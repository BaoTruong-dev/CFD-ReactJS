import React from 'react';
import Button from '../Button';
import './style.scss';
export default function CardContent({ src, title, content, price, discount }) {
    return (
        <div className='cardContent'>
            <div className='img'>
                <img src={src}></img>
            </div>
            <div className='info'>
                <p className="title">
                    {title}
                </p>
                <p className='content'>{content}</p>
            </div>
            <div className='price'>
                <div className='price__wrapper'>
                    <p>{price}</p>
                    <p>{discount}</p>
                </div>
                <Button color={'white'} border={'darkGreen'} background={'green'}
                    round={'round'}
                >Buy now</Button>
            </div>
        </div>
    );
}
