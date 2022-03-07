import React from 'react';
import Catalogue from '../Catalogue';
import './style.scss';
import { dataTags } from '../../constant';
export default function Footer() {
    return (
        <div className="footer container-fluid">
            <div className='footer__top'>
                <Catalogue title={dataTags.title.touch} list={dataTags.listLink.tough}></Catalogue>
                <Catalogue title={dataTags.title.connect} list={dataTags.listLink.connect}></Catalogue>
                <Catalogue title={dataTags.title.earnings} list={dataTags.listLink.earnings}></Catalogue>
                <Catalogue title={dataTags.title.account} list={dataTags.listLink.account}></Catalogue>
            </div>
            <div className="footer__bottom">
                <Catalogue title={dataTags.title.products} list={dataTags.listLink.products} point='product'></Catalogue>
            </div>
            <div className='copyRight'>
                Copyright © 2020 petrbilek.com
            </div>
        </div>
    );
}
