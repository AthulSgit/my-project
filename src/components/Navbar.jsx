import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '65px',
        backgroundColor: 'blue',
        color: 'white'
      }}
    >
      <h1>Product Management</h1>
      <div>
        <Link
          to="/"
          style={{
            margin: '0 15px',
            color: 'white'
          }}
        >
          Home
        </Link>
        <Link
          to="/add-product"
          style={{
            margin: '0 15px',
            color: 'white',
          }}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
