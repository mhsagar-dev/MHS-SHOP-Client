import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const MyOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [myorder, setMyorder] = useState([]);
    
    useEffect(() => {
        fetch(`https://guarded-brushlands-08692.herokuapp.com/orderlist/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [])
    return (
        <div className='contaiiner'>
            <h4 className='text-center mt-3'>
                Hey <span className='text-danger'> {loggedInUser.name}</span>, This is your Order List
            </h4>
            <table className='table table-bordered container mt-3'>
                <thead>
                    <tr className='text-center table-light table-responsive'>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {myorder.map((order) => (
                        <tr>
                            <td>{order.productName}</td>
                            <td>BDT {order.price}/-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;