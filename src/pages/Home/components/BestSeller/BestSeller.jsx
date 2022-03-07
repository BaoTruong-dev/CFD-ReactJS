import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
import Catalogue from '../../../../components/Catalogue';
import { dataTags } from '../../../../constant';
import LoadingProduct from '../../../../components/LoadingProduct';
import './style.scss';
export default function BestSeller(props) {
    let productsArray = props.products;
    if (productsArray.data)
        return (
            <div className='bestSeller homePage__content container-fluid'>
                <div className='left'>
                    <Catalogue title={dataTags.title.bestSeller} list={dataTags.listLink.bestSeller} point={'underLine'}></Catalogue>
                    <Button positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                        round={'round'}
                    >More categories</Button>
                </div>
                <div className='right'>
                    <LoadingProduct />
                    <LoadingProduct />
                    <LoadingProduct />

                </div>
            </div>
        );

    return (
        <div className='bestSeller homePage__content container-fluid'>
            <div className='left'>
                <Catalogue title={dataTags.title.bestSeller} list={dataTags.listLink.bestSeller} point={'underLine'}></Catalogue>
                <Button positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                    round={'round'}
                >More categories</Button>
            </div>
            <div className='right'>
                <CardContent title={productsArray[0]?.name} content={productsArray[0]?.short_description} price={productsArray[0]?.real_price.toLocaleString() + 'VND'} src={productsArray[0]?.thumbnail_url} />
                <CardContent title={productsArray[1]?.name} content={productsArray[1]?.short_description} price={productsArray[1]?.real_price.toLocaleString() + 'VND'} discount={productsArray[1]?.price.toLocaleString() + 'VND'} src={productsArray[1]?.thumbnail_url} />
                <CardContent title={productsArray[2]?.name} content={productsArray[2]?.short_description} price={productsArray[2]?.real_price.toLocaleString() + 'VND'} discount={productsArray[2]?.price.toLocaleString() + 'VND'}
                    src={productsArray[2]?.thumbnail_url}
                />
            </div>
        </div>
    );
}
