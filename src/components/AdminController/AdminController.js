import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminController = () => {
    return (
        <div className='container text-center mt-3'>
            <ButtonGroup aria-label="Basic example p-5">
                <Button className='me-3' as={Link} to='addYourProducts' variant="primary">Add Your Product</Button>
                <Button as={Link} to='allProducts' variant="primary">All Products Of Store</Button>
            </ButtonGroup>
        </div>
    );
};

export default AdminController;