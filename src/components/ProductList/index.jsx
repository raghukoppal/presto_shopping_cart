import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Product from '../Product/container';

export const ProductList = ({ products }) => (
  <>
    <h3>Products</h3>
    <ul className='product-list'>
      {products.map((product) => (
        <li key={product.id} className='product-list__item'>
          <Product {...product} />
        </li>
      ))}
    </ul>
  </>
);

ProductList.propTypes = {
  products: PropTypes.array,
};
