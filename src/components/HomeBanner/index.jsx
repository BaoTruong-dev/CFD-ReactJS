import './style.scss';
import React from 'react';
import Button from '../Button';

export default function HomeBanner({ src, note, title }) {

    return (
        <div className='homeBanner'>
            <p>{note}</p>
            <h2>{title}</h2>
            <Button color={'black'} background={'transparent'} size={'medium'}
                round={'round'} border={'lightGreen'} positionIcon={'right'}
            >Read recepies</Button>
        </div>
    );
}
