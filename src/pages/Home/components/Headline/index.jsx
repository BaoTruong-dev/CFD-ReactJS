import React from 'react';
import './style.scss';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
export default function Headline() {
    return (
        <div className="headline container-fluid" >
            <div className='top'>
                <h3>Section Headline</h3>
                <Button background={'transparent'} border={'none'} positionIcon={'right'}>Button</Button>
            </div>
            <div className='headline__wrapper'>
                <CardContent title={'Product title'} content={'Space for a small product description'} price={'1.48 USD'} />
                <CardContent title={'Product title'} content={'Space for a small product description'} price={'1.48 USD'}
                    discount={'48.56'}
                />
                <CardContent title={'Product title'} content={'Space for a small product description'} price={'1.48 USD'}
                    discount={'48.56'}
                />
                <CardContent title={'Product title'} content={'Space for a small product description'} price={'1.48 USD'}
                    discount={'48.56'}
                />
            </div>
        </div >
    );
}
