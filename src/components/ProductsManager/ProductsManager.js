import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const ProductsManager = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`https://guarded-brushlands-08692.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className='container'>
            <table className='table table-bordered container mt-3'>
                <thead>
                    <tr className='text-center table-light table-responsive'>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((allPDTS) => (
                        <tr>
                            <td>{allPDTS.name}</td>
                            <td>BDT {allPDTS.price}/-</td>
                            <td><button className='btn btn-danger disabled'>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsManager;