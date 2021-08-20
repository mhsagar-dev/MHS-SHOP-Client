import React, { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';

const AllProducts = () => {

    const [pdts, setPdts] = useState();

    useEffect(() => {
        fetch('https://guarded-brushlands-08692.herokuapp.com/products')
        .then (res => res.json())
        .then (data => setPdts(data));
      }, [])
    return (
        <div>
            {
                pdts.map(pdc =><Products pdc={pdc}></Products>)
            }
        </div>
    );
};

export default AllProducts;