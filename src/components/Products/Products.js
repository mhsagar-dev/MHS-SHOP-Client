import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = (props) => {

  const { _id, name, price, imgURL } = props.pd;
  return (
    <div className="col-md-4 mt-3">
      <div className="shadow bg-light rounded p-5">
        <Card.Img className='rounded-pill' variant="top" src={imgURL} height='180px' />
        <Card.Body className='text-center'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Link as={Link} to={`/confirmation/${_id}`} className="btn btn-primary">Order</Link>
        </Card.Body>
      </div>
    </div>


  );
};

export default Products;