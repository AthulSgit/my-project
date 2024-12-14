import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      image,
      price,
      category,
    });
    alert('Product submitted successfully!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <TextField
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          sx={{
            marginTop: '20px',
            backgroundColor: 'white', 
            borderRadius: '4px',     
          }}
        />
        <TextField
          label="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          sx={{
            backgroundColor: 'white', 
            borderRadius: '4px',     
          }}
        />
        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          sx={{
            backgroundColor: 'white', 
            borderRadius: '4px',     
          }}
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          sx={{
            backgroundColor: 'white', 
            borderRadius: '4px',     
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
