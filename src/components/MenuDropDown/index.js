import React from 'react';
import ItemList from '../ItemList';
import './style.scss';

export default function MenuDropDown({ nav, mainLink }) {
    let menuList = ['All Products', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Kitchen', 'Special nutrition', 'Baby', 'Pharmacy'];
    return (
        <div className='menuDropDown container-fluid'>
            <ul>
                {nav ? nav.map(item => <li key={item}><ItemList mainLink={mainLink} address={item.toLowerCase().replaceAll(/\s/g, '')}>{item}</ItemList></li>) :
                    menuList.map(item => <li key={item}><ItemList address={item.toLowerCase().replaceAll(/\s/g, '')}>{item}</ItemList></li>)}
            </ul>
        </div>
    );
}
