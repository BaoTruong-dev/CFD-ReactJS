import React from 'react';
import Skeleton from '../Skeleton';
import './style.scss';

export default function LoadingProduct() {
    return (
        <div className='loadingProduct cardContent'>
            <Skeleton width={236} height={180} />
            <Skeleton variant="text" style={{ margin: "20px 0" }} />
            <Skeleton width={236} height={100} />
        </div>
    );
}
