import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '../../svgs';
import Button from '../Button';
import './style.scss';
export default function CardContent({ src, title, content, price, discount, rate = 0, path, id, _id, handleOrder, ...rest }) {
    return (
        <Link to={path ? path : `/productdetail?id=${id}`} className='cardContent' {...rest}>
            <div className='img'>
                <img src={src}></img>
            </div>
            <div className='info'>
                <p className="title">
                    {title}
                </p>
                <p className='content'>{content}</p>
            </div>
            <div className='rate'>
                {rate ? [...Array(rate)]?.map(e => <StarIcon />) : null}
            </div>
            <div className='price'>
                <div className='price__wrapper'>
                    <p>{price}</p>
                    <p>{discount}</p>
                </div>
                <Button onClick={() => handleOrder(_id)} color={'white'} border={'darkGreen'} background={'green'}
                    round={'round'}
                >Buy now</Button>
            </div>
        </Link>
    );
}
