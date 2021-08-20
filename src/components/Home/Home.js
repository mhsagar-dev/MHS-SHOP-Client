import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://guarded-brushlands-08692.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <h1 className='mt-3 text-center'>Choose Yours</h1>
            <div className='row'>
                {
                    products.map(pd =><Products pd={pd}></Products>)
                }

            </div>
            </div>
        
    );
};

export default Home;