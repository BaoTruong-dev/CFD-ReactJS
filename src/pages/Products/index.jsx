import React from 'react';
import useQuery from '../../hooks/useQuery';
import productsService from '../../services/productsService';
export default function Products() {
    const { data: products, isFetching: isFetchingProducts } = useQuery(productsService.products, []);
    console.log(products);
    return (
        <>
            {/* {console.log(data)} */}
        </>
    );
}
