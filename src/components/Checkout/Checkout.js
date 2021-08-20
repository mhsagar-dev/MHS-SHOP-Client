import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Checkout = () => {

    const {id} = useParams();
    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch(`https://guarded-brushlands-08692.herokuapp.com/products/${id}`)
        .then (res => res.json())
        .then (data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className='text-center'>i am Checkout</h1>
            <h1>Your Order: {orders.name}</h1>
        </div>
    );
};

export default Checkout;