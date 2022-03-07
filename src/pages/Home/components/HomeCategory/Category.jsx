import React from 'react';
import Button from '../../../../components/Button';
import Catalogue from '../../../../components/Catalogue';
import HomeBanner from '../../../../components/HomeBanner';
import { dataTags } from '../../../../constant';
import './style.scss';
export default function HomeCategory() {
    return (
        <div className='homeCategory homePage__content container-fluid'>
            <div className='left'>
                <Catalogue title={dataTags.title.category} list={dataTags.listLink.category} point={'underLine'}
                />
                <Button positionIcon='right' size={'medium'} color={'black'} border={'grey'} background={'grey'}
                    round={'round'}
                >More categories</Button>
            </div>
            <div className='right'>
                <HomeBanner note={'Banner subfocus'} title={'Space for heading'}></HomeBanner>
                <HomeBanner note={'Banner subfocus'} title={'Space for heading'}></HomeBanner>
            </div>
        </div >
    );
}
