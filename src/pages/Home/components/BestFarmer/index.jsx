import React from 'react';
import Button from '../../../../components/Button';
import CardContent from '../../../../components/CardContent';
import Catalogue from '../../../../components/Catalogue';
import LoadingProduct from '../../../../components/LoadingProduct';
import { dataTags } from '../../../../constant';
import './style.scss';
export default function BestFarmer(props) {
    let productsArray = props.products;
    if (productsArray.data)
        return (
            <div className='bestFarmer homePage__content container-fluid'>
                <div className='left'>
                    <Catalogue title={dataTags.title.bestFarmers} list={dataTags.listLink.bestFarmers} point={'underLine'}></Catalogue>
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
        <div className='bestFarmer homePage__content container-fluid'>
            <div className='left'>
                <Catalogue title={dataTags.title.bestFarmers} list={dataTags.listLink.bestFarmers} point={'underLine'}></Catalogue>
                <Button positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                    round={'round'}
                >More categories</Button>
            </div>
            <div className='right'>
                <CardContent title={productsArray[6]?.name} content={productsArray[6]?.short_description} price={productsArray[6]?.real_price.toLocaleString() + 'VND'} src={productsArray[6]?.thumbnail_url} />
                <CardContent title={productsArray[7]?.name} content={productsArray[7]?.short_description} price={productsArray[7]?.real_price.toLocaleString() + 'VND'} discount={productsArray[7]?.price.toLocaleString() + 'VND'} src={productsArray[7]?.thumbnail_url} />
                <CardContent title={productsArray[8]?.name} content={productsArray[8]?.short_description} price={productsArray[8]?.real_price.toLocaleString() + 'VND'} discount={productsArray[8]?.price.toLocaleString() + 'VND'}
                    src={productsArray[8]?.thumbnail_url}
                />
            </div>
        </div>
    );
}
