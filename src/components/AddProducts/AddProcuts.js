import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


const AddProcuts = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { } } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      imgURL: imgURL
    };

    console.log(data);
    const url = `https://guarded-brushlands-08692.herokuapp.com/addProduct`;
    console.log(productData);

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Product Added')
        history.replace('/home')
      })
  };


  const handleImgUpload = event => {
    console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set('key', '77da35cf31aaabe5dc1b1cc146b2d1b2');
    imgData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    
    <div className="container">
      <div>
      <h2>Add Your Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className="form-control" required placeholder="Product Name" {...register("name")} />
        <br />
        <input className="form-control" required placeholder="Product Price" {...register("price")} />
        <br />
        <input className="form-control" name="exampleRequired" type='file' onChange={handleImgUpload} />
        <br />
        <input className="form-control btn btn-primary" required type="submit" />
      </form>
      </div>
    </div>
  );
};

export default AddProcuts;